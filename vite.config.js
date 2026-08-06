import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Bilder som skal preloades. Nettleseren starter nedlastingen samtidig med
// JS-bundelen i stedet for aa vente til React har rendret, noe som typisk
// sparer 200-400 ms paa foerste visning.
//
// Kun bilder som er synlige over folden ved sidelast hoerer hjemme her -
// preload av noe brukeren ikke ser stjeler baandbredde fra det som vises.
// Home.webp brukes bade som hero-bilde (400px) og navbar-logo (48px).
const PRELOAD_ASSETS = ['Home.webp']

function preloadImages(assets) {
  // Filnavn hashes ved bygg (Home.webp -> Home-1vIerhH8.webp). Vi plukker opp
  // de hashede navnene i generateBundle og bruker dem i transformIndexHtml,
  // som kjoerer etterpaa - index.html finnes ikke i bundle-objektet.
  let resolved = []

  return {
    name: 'preload-images',

    generateBundle(_options, bundle) {
      resolved = []

      for (const name of assets) {
        const base = name.replace(/\.[^.]+$/, '')
        const ext = name.split('.').pop()
        const pattern = new RegExp(`^assets/${base}-[A-Za-z0-9_-]+\\.${ext}$`)

        const match = Object.keys(bundle).find((f) => pattern.test(f))
        if (!match) {
          this.warn(
            `preload-images: fant ikke "${name}" i bundelen - ` +
              `preload hoppes over. Er filnavnet riktig?`
          )
          continue
        }
        resolved.push(`/${match}`)
      }
    },

    transformIndexHtml: {
      // 'post' sikrer at Vite allerede har lagt inn <script> og <link
      // rel=stylesheet>, slik at preload havner foerst i <head>.
      order: 'post',
      handler(html, ctx) {
        // Dev: ingen hash, filene serveres rett fra src/.
        const hrefs = ctx.server
          ? assets.map((name) => `/src/assets/${name}`)
          : resolved

        if (!hrefs.length) return html

        const tags = hrefs.map((href) => ({
          tag: 'link',
          attrs: {
            rel: 'preload',
            as: 'image',
            href,
            type: 'image/webp',
          },
          injectTo: 'head-prepend',
        }))

        return { html, tags }
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), preloadImages(PRELOAD_ASSETS)],
})
