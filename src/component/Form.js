import React from "react";

const Form = ({ changeHandler, submitHandler, formData }) => {


  return (
    <form onSubmit={submitHandler} > 
      <label>
        name:
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={changeHandler}
        />
      </label>
      <label>
        email:
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={changeHandler}
        />
      </label>
      <label>
        rol:
        <input
          type="text"
          name="rol"
          placeholder="rol"
          value={formData.rol}
          onChange={changeHandler}
        />
      </label>
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
