import React, { useContext } from "react";
import result from "./Result.module.css";
import { Context } from "../context";

function Result() {
  const { deleteForm, clientForm, handleClickForm } = useContext(Context);

  return (
    <section className={result.Full_result_container}>
      {clientForm.map((resultForm) => (
        <div
          className={result.FormResult}
          key={resultForm.id}
          onClick={() => handleClickForm(resultForm)}
        >
          <button
            className={result.Btn_remove}
            onClick={() => deleteForm(resultForm.id)}
          >
            ❌
          </button>
          <div className={result.container}>
            <p className={result.Result_text}>
              Full Name: {resultForm.nameOfCustomer}
            </p>
            <p className={result.Result_text}>E-mail: {resultForm.mail}</p>
            <p className={result.Result_text}>
              Phone Number: {resultForm.phoneNumber}
            </p>
            <p className={result.Result_text}>
              Employment: {resultForm.employment}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
export default Result;
