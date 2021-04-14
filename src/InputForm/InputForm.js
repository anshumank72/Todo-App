import React from "react";
import "./InputForm.css";

const inputForm = (props) => {
  return (
    <div className="form">
      <form onSubmit={props.onSubmit} id="myform">
        <input className="input" type="text" onChange={props.onChange} />
        <button>ADD</button>
      </form>
    </div>
  );
};
export default inputForm;
