import github from "../assets/footer/github.webp";
import linkedin from "../assets/footer/linkedin.webp";
import mail from "../assets/footer/mail.webp";
import "./Footer.css";

function Footer() {
  return (
    <footer>

        <div className="footer-icons">
            <a href="mailto:henrik.christoffer.kran@email.com" target="_blank" rel="noopener noreferrer" className="icon" id="mail">
                <img src={mail} alt="E-post" loading="lazy" decoding="async" />
            </a>

            <a href="https://www.linkedin.com/in/henrik-christoffer-kran-46317b274/" target="_blank" rel="noopener noreferrer" className="icon" id="linkedin">
                <img src={linkedin} alt="LinkedIn" loading="lazy" decoding="async" />
            </a>

            <a href="https://git.ntnu.no/henrikck" target="_blank" rel="noopener noreferrer" className="icon" id="GitHubNtnu">
                <img src={github} alt="GitHub NTNU" loading="lazy" decoding="async" />
            </a>

            <a href="https://github.com/henrikck" target="_blank" rel="noopener noreferrer" className="icon" id="GitHubPriv">
                <img src={github} alt="GitHub privat" loading="lazy" decoding="async" />
            </a>
        </div>


      <p>&copy; {new Date().getFullYear()} Henrik C Kran. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
