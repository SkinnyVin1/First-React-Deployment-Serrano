import "./SkillLanguage.css";

const SkillLanguage = (props) => {
  return (
    <div className="skillDiv">
      <img src={props.image} />
      <h5>{props.title}</h5>
    </div>
  );
};

export default SkillLanguage;
