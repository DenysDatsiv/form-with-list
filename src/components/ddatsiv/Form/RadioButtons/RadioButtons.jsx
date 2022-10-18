import React, { useContext } from "react";
import formRadioBtnStyles from "./RadioButtons.module.css";
import { Context } from "../../context";
function RadioButtons() {
  const { values, handleChange } = useContext(Context);
  return (
    <div>
      <p className={formRadioBtnStyles.Radio_btn_block_header}>
        Employment <span>*</span>
      </p>
      <div className={formRadioBtnStyles.Radio_btn_block}>
        <label className={formRadioBtnStyles.Input_for_radio_button}>
          <input
            type="radio"
            value="Student"
            checked={values.employment === "Student"}
            onChange={(e) => handleChange("employment", "Student")}
          />
          <span>Student</span>
        </label>
        <label className={formRadioBtnStyles.Input_for_radio_button}>
          <input
            type="radio"
            value="Retired"
            checked={values.employment === "Retired"}
            onChange={(e) => handleChange("employment", "Retired")}
          />
          <span>Retired</span>
        </label>
        <label className={formRadioBtnStyles.Input_for_radio_button}>
          <input
            type="radio"
            value="Part time"
            checked={values.employment === "Part Time"}
            onChange={(e) => handleChange("employment", "Part Time")}
          />
          <span>Part time</span>
        </label>
        <label className={formRadioBtnStyles.Input_for_radio_button}>
          <input
            type="radio"
            value="Full Time"
            checked={values.employment === "Full Time"}
            onChange={(e) => handleChange("employment", "Full Time")}
          />
          <span>Full time</span>
        </label>
      </div>
    </div>
  );
}
export default RadioButtons;
