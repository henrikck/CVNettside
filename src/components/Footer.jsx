import github from "../assets/footer/github.png";
import linkedin from "../assets/footer/linkedin.png";
import mail from "../assets/footer/mail.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>

        <div className="footer-icons">
            <a href="mailto:henrik.christoffer.kran@email.com" target="_blank" rel="noopener noreferrer" className="icon" id="mail">
                <img src={mail} alt="E-post" />
            </a>

            <a href="https://www.linkedin.com/in/henrik-christoffer-kran-46317b274/" target="_blank" rel="noopener noreferrer" className="icon" id="linkedin">
                <img src={linkedin} alt="LinkedIn" />
            </a>

            <a href="https://git.ntnu.no/henrikck" target="_blank" rel="noopener noreferrer" className="icon" id="GitHubNtnu">
                <img src={github} alt="GitHub NTNU" />
            </a>

            <a href="https://github.com/henrikck" target="_blank" rel="noopener noreferrer" className="icon" id="GitHubPriv">
                <img src={github} alt="GitHub privat" />
            </a>
        </div>


      <p>&copy; {new Date().getFullYear()} Henrik C Kran. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
