import FormContact from "../Components/Form";
import { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({});
  const getData = (FormData) => {
    setData(FormData);
  };
  useEffect(() => {
    alert(`Submited`);
  });
  return (
    <div className="contact">
      <h1 className="contacttitle">get in touch</h1>
      <FormContact callback={getData}></FormContact>
      <h1>
        Thank you, {data.lastNameInfo}, {data.firstNameInfo}
      </h1>
    </div>
  );
};

export default Contact;
