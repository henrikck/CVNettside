import "./Contact.css"



export function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-header">
        <h1>Kontakt</h1>
        <p className="intro-text">
          Ta gjerne kontakt dersom du har spørsmål, ønsker samarbeid, eller vil komme i kontakt av andre grunner.
        </p>
      </div>

      <div className="contact-info-section">
        <h2 className="section-title">Kontaktinformasjon</h2>
        
        <div className="info-group">
          <div className="info-item">
            <span className="label">E-post</span>
            <a href="mailto:henrik.christoffer.kran@gmail.com" className="link">
              henrik.christoffer.kran@gmail.com
            </a>
          </div>

          <div className="info-item">
            <span className="label">Telefon</span>
            <a href="tel:+4795282101" className="link">
              +47 952 82 101
            </a>
          </div>

          <div className="info-item">
            <span className="label">LinkedIn</span>
            <a 
              href="https://www.linkedin.com/in/henrik-christoffer-kran-46317b274/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link"
            >
              linkedin.com/in/henrik-christoffer-kran
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}