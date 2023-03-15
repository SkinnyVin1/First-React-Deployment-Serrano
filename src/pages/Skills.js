import "./Skills.css";
import SkillLanguage from "../Components/SkillLanguage";
import Htmlimg from "../pages/images/html5.svg";
import Cssimg from "../pages/images/css3-alt.svg";
import Jsimg from "../pages/images/square-js.svg";
import Bootstrapimg from "../pages/images/bootstrap.svg";
import Sassimg from "../pages/images/sass.svg";
import Reactimg from "../pages/images/react.svg";
import Phpimg from "../pages/images/php.svg";
import Sqlimg from "../pages/images/sql.svg";
import Laravelimg from "../pages/images/laravel.svg";

import Adobexdimg from "../pages/images/xd.svg";
import Adobepsimg from "../pages/images/ps.svg";
import Adobeaiimg from "../pages/images/ai.svg";
import Figmaimg from "../pages/images/figma.svg";
import Githubimg from "../pages/images/github.svg";
import Gitimg from "../pages/images/git.svg";

const Skills = () => {
  return (
    <div className="skills">
      <h1>skills & proficiencies</h1>

      <div className="skillsWrapper">
        <div className="front section">
          <h1>Front-End</h1>
          <div className="icongrid">
            <SkillLanguage image={Htmlimg} title="HTML5" />
            <SkillLanguage image={Cssimg} title="CSS3" />
            <SkillLanguage image={Jsimg} title="JavaScript" />
            <SkillLanguage image={Bootstrapimg} title="Bootstrap" />
            <SkillLanguage image={Sassimg} title="Sass" />
            <SkillLanguage image={Reactimg} title="React JS" />
          </div>
        </div>
        <div className="back section">
          <h1>Back-End</h1>
          <div className="icongrid">
            <SkillLanguage image={Phpimg} title="PHP" />
            <SkillLanguage image={Sqlimg} title="MySQL" />
            <SkillLanguage image={Laravelimg} title="Laravel" />
          </div>
        </div>
        <div className="other section">
          <h1>Others</h1>
          <div className="icongrid">
            <SkillLanguage image={Adobexdimg} title="Adobe XD" />
            <SkillLanguage image={Adobeaiimg} title="Adobe Illustrator" />
            <SkillLanguage image={Adobepsimg} title="Adobe Photoshop" />
            <SkillLanguage image={Figmaimg} title="Figma" />
            <SkillLanguage image={Githubimg} title="Github" />
            <SkillLanguage image={Gitimg} title="Git" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
