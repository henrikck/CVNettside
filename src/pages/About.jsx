import "./About.css";
import snm2025 from "../assets/sports/SNM2025.jpg"; 

export function About() {
  return (
    <div className="about-container">
      {}
      <section className="about-hero-section">
        <div className="about-image-wrapper">
          <img src={snm2025} alt="Henrik Christoffer Kran" className="about-img" />
        </div>
        
        <div className="about-intro-text">
          <h1 className="about-title">Om meg</h1>
          <p className="about-lead">
            Jeg heter Henrik Christoffer Kran og er masterstudent i datateknologi ved NTNU.
          </p>
          <p className="about-description-text">
            Jeg trives i miljøer med høye krav, både faglig og personlig, og motiveres 
            av å utvikle løsninger som er robuste, effektive og gjennomtenkte.
          </p>
        </div>
      </section>

      {}
      <div className="about-content-grid">
        
        <div className="about-card">
          <div className="about-icon"><i className="fa-solid fa-medal"></i></div>
          <h3>Erfaring & Disiplin</h3>
          <p>
            Jeg har bakgrunn som patruljefører i Garnisonen i Sør-Varanger (GSV) og som 
            landslagsutøver i bryting. Disse erfaringene har gitt meg høy arbeidskapasitet, 
            struktur og evne til å ta ansvar i krevende situasjoner.
          </p>
        </div>

        
        <div className="about-card">
          <div className="about-icon"><i className="fa-solid fa-code"></i></div>
          <h3>Programmering & Utvikling</h3>
          <p>
            Faglig har jeg en sterk interesse for programmering og systemutvikling. 
            Jeg har erfaring med <strong>Python, Java og React</strong>, og denne nettsiden 
            er utviklet av meg ved bruk av React, HTML, CSS og JavaScript med Git for versjonskontroll.
          </p>
        </div>

        
        <div className="about-card">
          <div className="about-icon"><i className="fa-solid fa-chalkboard-user"></i></div>
          <h3>Formidling & Veiledning</h3>
          <p>
            Som læringsassistent ved NTNU har jeg veiledet studenter i Python, kretsteori 
            og digital logikk. Dette har styrket min evne til å formidle komplekse 
            konsepter på en tydelig og forståelig måte.
          </p>
        </div>
      </div>
    </div>
  );
}