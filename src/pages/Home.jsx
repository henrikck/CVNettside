import CVImg from "../assets/Home.jpg";
import "./Home.css";


import ntnuImg from "../assets/ntnuS.png"; 
import askoImg from "../assets/askoS.png"; 
import gsvImg from "../assets/gsvS.png"; 
import ntnuiImg from "../assets/ntnuiS.png";

export function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-title">
            Masterstudent, <br />
            patruljefører og landslagsutøver.
          </h1>

          <p className="hero-description">
            Jeg heter Henrik Christoffer Kran, er masterstudent i datateknologi ved NTNU, 
            med bakgrunn som patruljefører i GSV og landslagsutøver i bryting.
          </p>

          <div className="hero-socials">
            <a href="https://linkedin.com/in/henrik-christoffer-kran" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/ditt-brukernavn" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        <div className="profile-wrapper">
          <img src={CVImg} alt="Henrik Christoffer Kran" className="hero-img" />
        </div>
      </section>

      <section className="companies-section">
        <div className="divider-container">
          <span className="divider-text">Organisasjoner jeg har vært en del av</span>
          <div className="divider-line"></div>
        </div>
        
        <div className="logo-grid">
            <div className="company-logo">
                <a href="https://www.ntnu.no" target="_blank" rel="noreferrer">
                <img src={ntnuImg} alt="NTNU" />
                </a>
            </div>
            
            <div className="company-logo">
                <a href="https://www.forsvaret.no/om-forsvaret/tjenestesteder/hoybuktmoen-gsv" target="_blank" rel="noreferrer">
                <img src={gsvImg} alt="GSV" />
                </a>
            </div>
            
            <div className="company-logo">
                <a href="https://ntnui.no/roing/" target="_blank" rel="noreferrer">
                <img src={ntnuiImg} alt="NTNUI" />
                </a>
            </div>
            
            <div className="company-logo">
                <a href="https://asko.no/kontakt-oss/vare-asko-selskap/asko-oslofjord-as/" target="_blank" rel="noreferrer">
                <img src={askoImg} alt="ASKO" />
                </a>
            </div>
            </div>
      </section>
    </div>
  );
}