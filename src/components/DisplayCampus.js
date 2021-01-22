import React from "react";

const DisplayCampus = (props) => (
  <div>
    Name: {props.name} <br />
    Address: {props.address} <br />
    Descriptiom: {props.description}
    <br />
    <button>DELETE</button>
    <button>EDIT</button>
  </div>
);

export default DisplayCampus;
