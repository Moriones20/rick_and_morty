import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./About.modules.css";

const About = () => {
  return (
    <div className="about">
      <div className="info-me">
        <h2>I'm a FullStack Developer</h2>
        <h1>Felipe Moriones</h1>
        <p></p>
        <hr color="#d1d1d1" />
        <div className="more-info">
          <div className="data">
            <h4 className="bold">Date of Birth: </h4>
            <h4 className="bold">E-mail: </h4>
            <h4 className="bold">Phone: </h4>
          </div>
          <div className="res">
            <h4>Aug 06, 2001</h4>
            <h4>Moriones06082001@gmail.com</h4>
            <h4>+57 302 311 8968</h4>
          </div>
        </div>
        <div className="icons">
          <a href="https://www.instagram.com/felipemsd._/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="instagram"/>
          </a>
          <a href="https://github.com/Moriones20"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="github"/>
          </a>
          <a href="https://www.linkedin.com/in/felipe-moriones-150636221/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin"/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100080846719473"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="facebook"/>
          </a>
        </div>
      </div>
      <div className="image">
        <img src="https://i.ibb.co/G7NRbzz/Insta.jpg" alt="Felipe Moriones" />
      </div>
    </div>
  );
};

export default About;
