import "./About.css";
import snm2025 from "../assets/sports/SNM2025.webp";

export function About() {
  return (
    <div className="about-container">

      <section className="about-hero-section">
        <div className="about-image-wrapper">
          <img
            src={snm2025}
            alt="Henrik Christoffer Kran"
            className="about-img"
            width={350}
            height={450}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className="about-intro-text">
          <h1 className="about-title">Om meg</h1>
          <p className="about-lead">
            Jeg heter Henrik Christoffer Kran og er sivilingeniørstudent i datateknologi
            ved NTNU med spesialisering i kunstig intelligens.
          </p>
          <p className="about-description-text">
            Jeg trives i miljøer med høye krav, både faglig og personlig, og motiveres
            av å utvikle løsninger som er robuste, effektive og gjennomtenkte.
          </p>
        </div>
      </section>

      <div className="about-content-grid">

        <div className="about-card">
          <h3>Maskinlæring &amp; AI</h3>
          <p>
            Spesialiseringen min er kunstig intelligens. Som nestleder i <strong>ReLU NTNU</strong>,
            en studentdrevet organisasjon som bygger anvendte ML-løsninger for eksterne partnere.
            Hos <strong>Konnekt</strong> bygde jeg et computer vision-system for
            objektgjenkjenning med <strong>YOLO og PyTorch</strong>, koblet til et autonomt
            styringssystem basert på sanntids socket-programmering.
          </p>
        </div>

        <div className="about-card">
          <h3>Erfaring &amp; Disiplin</h3>
          <p>
            Jeg har bakgrunn som patruljefører i Garnisonen i Sør-Varanger (GSV), der jeg
            ledet en patrulje under krevende forhold og avsluttet med vurderingen «Over norm».
            Som landslagsutøver i bryting har jeg konkurrert internasjonalt på høyt nivå over flere år.
            Til sammen har disse erfaringene gitt meg høy arbeidskapasitet, disiplin og struktur,
            og evnen til å holde hodet kaldt og ta ansvar når situasjonen krever det.
          </p>
        </div>

        <div className="about-card">
          <h3>Programmering &amp; Utvikling</h3>
          <p>
            Faglig har jeg en sterk interesse for programmering og systemutvikling, fra
            backend og API-er til brukervennlige grensesnitt. Jeg jobber til daglig i
            <strong> Python og Java</strong>, har erfaring med <strong>SQL og databaser</strong>,
            og har bygget REST-API-er i rammeverk som <strong>Django og Spring Boot</strong>.
            På frontend-siden bruker jeg <strong>React, HTML, CSS og JavaScript</strong>, denne
            nettsiden er utviklet av meg fra bunnen av, med Git for versjonskontroll.
          </p>
        </div>

      </div>
    </div>
  );
}
