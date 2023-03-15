import "./Work.css";
import Portfolio from "../pages/images/port.png";
import Portfolio1 from "../pages/images/port2.png";
import Portfolio2 from "../pages/images/port3.png";
import Portfolio3 from "../pages/images/port4.png";
import Portfolio4 from "../pages/images/port5.png";

const Works = () => {
  return (
    <div className="work">
      <h1>previous projects</h1>
      <p>
        Here are a few past design projects I've worked on. Want to see more?
        Email me.
      </p>
      <div className="wrapper">
        <div className="projCard">
          <div className="reav">
            <h2>Personal Portfolio Website</h2>
            <div className="cardIcons">
              <a href="/">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="/">
                <i class="fa-sharp fa-solid fa-globe"></i>
              </a>
            </div>
          </div>

          <img src={Portfolio} />
        </div>

        <div className="projCard">
          <div className="reav">
            <h2>Prince Burger Website</h2>
            <div className="cardIcons">
              <a href="https://github.com/SkinnyVin1/WD34P_MiniProject2_Group1">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://skinnyvin1.github.io/WD34P_MiniProject2_Group1/">
                <i class="fa-sharp fa-solid fa-globe"></i>
              </a>
            </div>
          </div>

          <img src={Portfolio1} />
        </div>

        <div className="projCard">
          <div className="reav">
            <h2>Techknow Ecommerce Website</h2>
            <div className="cardIcons">
              <a href="https://github.com/SkinnyVin1/Group-4-Repo/tree/master">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://skinnyvin1.github.io/Group-4-Repo/">
                <i class="fa-sharp fa-solid fa-globe"></i>
              </a>
            </div>
          </div>

          <img src={Portfolio2} />
        </div>

        <div className="projCard">
          <div className="reav">
            <h2>Hideout Cafe Website</h2>
            <div className="cardIcons">
              <a href="https://github.com/SkinnyVin1/Cafe">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://skinnyvin1.github.io/Cafe/">
                <i class="fa-sharp fa-solid fa-globe"></i>
              </a>
            </div>
          </div>

          <img src={Portfolio3} />
        </div>

        <div className="projCard">
          <div className="reav">
            <h2>Yoshimeatsu Website</h2>
            <div className="cardIcons">
              <a href="https://github.com/SkinnyVin1/Group-4-Repo/tree/master">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://emergelifestyle.wixsite.com/yoshimeatsu?fbclid=IwAR02hcc3o2teueDcteOQQhhhCUwGKrj6OscBKX2cXmiKNMCA4Gfygp7zI4g">
                <i class="fa-sharp fa-solid fa-globe"></i>
              </a>
            </div>
          </div>

          <img src={Portfolio4} />
        </div>
      </div>
    </div>
  );
};

export default Works;
