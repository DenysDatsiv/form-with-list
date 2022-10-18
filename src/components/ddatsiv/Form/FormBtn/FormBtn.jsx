import React, { useContext } from "react";
import formBtnStyles from "./FormBtn.module.css";
import { Context } from "../../context";

function FormBtn() {
  const { handleClear } = useContext(Context);
  return (
    <div>
      <button type="submit" className={formBtnStyles.Btn} value="Add Form">
        Submit and Clean 📨
      </button>
      <button
        type="reset"
        className={formBtnStyles.Btn_clean}
        onClick={() => handleClear()}
      >
        Just Clean
      </button>
    </div>
  );
}
export default FormBtn;
