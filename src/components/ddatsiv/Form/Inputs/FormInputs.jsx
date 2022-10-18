import React, { useContext } from "react";
import formInputStyles from "./FormInput.module.css";
import { Context } from "../../context";
function FormInputs() {
  const { values, handleChange, errorEmail } = useContext(Context);
  return (
    <div className={formInputStyles.Input_block}>
      <div>
        <p className={formInputStyles.Tag_name}>
          Full Name <span>*</span>
        </p>
        <input
          className={formInputStyles.Form_input}
          type="text"
          placeholder="Full Name"
          required
          value={values.nameOfCustomer}
          onChange={(e) => handleChange("nameOfCustomer", e.target.value)}
        ></input>
      </div>
      <div>
        <p className={formInputStyles.Tag_name}>
          E-mail <span>*</span>
        </p>
        <input
          className={formInputStyles.Form_input}
          type="mail"
          placeholder="ex.Example@example.com"
          required="This is required."
          value={values.mail}
          onChange={(e) => handleChange("mail", e.target.value)}
        ></input>
        {errorEmail && (
          <span className={formInputStyles.Error}>{errorEmail}</span>
        )}
      </div>
      <div>
        <p className={formInputStyles.Tag_name}>
          Phone Number <span>*</span>
        </p>
        <input
          className={formInputStyles.Form_input}
          type="number"
          placeholder="+380 12 3456 789"
          required
          value={values.phoneNumber}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onChange={(e) => handleChange("phoneNumber", e.target.value)}
          maxLength={11}
        ></input>
      </div>
    </div>
  );
}
export default FormInputs;
