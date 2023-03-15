import { Link } from "react-router-dom";
import "./About.css";
import Me from "../pages/images/me2.png";
const About = () => {
  return (
    <div className="about">
      <div className="leftcon">
        <h1>Hi I'm VIN</h1>
        <span>
          I am a web developer. With 1 year of experience in the industry, I
          have developed a deep understanding of web development, from front-end
          to back-end.
        </span>
        <span>
          My passion for coding started at a young age and I've been honing my
          skills ever since. As a web developer, I enjoy the challenge of
          creating beautiful, functional, and user-friendly websites that meet
          the needs of businesses and individuals.
        </span>
        <span>
          My expertise includes HTML, CSS, JavaScript, PHP, and many other
          programming languages and frameworks. I am always on the lookout for
          new tools and technologies that can help me develop innovative
          solutions for my clients.
        </span>
        <button>
          <Link to="/Contact">
            Connect With Me <i class="fa-solid fa-angles-right"></i>
          </Link>
        </button>
      </div>
      <div className="rightcon">
        <img src={Me} />
      </div>
    </div>
  );
};

export default About;
