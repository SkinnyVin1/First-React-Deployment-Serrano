import { useState, usestate } from "react";
import Timer from "./Timer";

const FormContact = (details) => {
  const [firstName, setFirstName] = useState("Vin");
  const [lastName, setLastName] = useState("Vangogh");
  const submitForm = () => {
    details.callback({ firstNameInfo: firstName, lastNameInfo: lastName });
  };
  return (
    <div>
      <Timer></Timer>
      <form action="">
        <label htmlFor="">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="">last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <button type="button" onClick={submitForm}>
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default FormContact;
