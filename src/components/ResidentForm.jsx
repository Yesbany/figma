import React from "react";
import "./styles/ResidentForm.css"
const ResidentForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className="residentForm">
      <input className="residentForm__input" type="text" id="idLocation" placeholder="type a location id" />
      <button className="residentForm__button">Search</button>
    </form>
  );
};

export default ResidentForm;
