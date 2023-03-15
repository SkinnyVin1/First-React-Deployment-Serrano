import "@fortawesome/fontawesome-free/css/all.css";
import "./Home.css";
import Me from "../pages/images/me1.png";
import NameEffect from "./NameEffect";
const Home = () => {
  return (
    <div className="home">
      <div className="rightcontent">
        <img src={Me} />
      </div>
      <div className="leftcontent">
        <h1>hi! I am</h1>
        <div className="me">
          <NameEffect></NameEffect>
          <h1 id="cursor">|</h1>
        </div>
        {/* <h1>web developer</h1> */}
        <h4>Full Stack Web Developer | UI Designer | Graphic Artist</h4>

        <div className="icon">
          <p>Follow me:</p>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-dribbble"></i>
          <i class="fa-brands fa-discord"></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
