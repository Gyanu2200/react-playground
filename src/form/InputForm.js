import React, { useState } from "react";

//input:
// -> controlled inputfield -> we can get the data as we type and we have full control what do you want to do with that
// -> uncontrolled inputfield -> when you type you know nothing about data, you will only see once the data is submit

export const InputForm = ({ setData }) => {
  const [form, setForm] = useState("show data in real time");

  //function to update form and once the onChange event is trigger
  const handleOnChange = (e) => {
    // console.log(e.target.value);
    const { value } = e.target;
    setForm(value);
  };

  //function to send the data to parent component on submit
  const handleOnSubmit = (e) => {
    //e.preventDefault() stops the default behaviour of form to reload the page/browser
    e.preventDefault();
    setData(form);
  };

  return (
    <div>
      <div className="realTimeDis">{form}</div>
      <form onSubmit={handleOnSubmit}>
        <p>
          <label htmlFor="">User Name: </label>
          <input type="text" onChange={handleOnChange} />
        </p>
        <p>
          <button>Submit</button>
        </p>
      </form>
    </div>
  );
};
