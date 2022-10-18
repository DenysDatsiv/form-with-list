import React, { useState, useCallback } from "react";
import styles from "./Home.module.css";
import { Context } from "./context";
import Result from "./Result/Result";
import FormInputs from "./Form/Inputs/FormInputs";
import RadioButtons from "./Form/RadioButtons/RadioButtons";
import FormBtn from "./Form/FormBtn/FormBtn";
const Component = () => {
  const [newId, setNewId] = useState(0);

  const [clientForm, setclientForm] = useState([]);

  const [errorEmail, setErrorEmail] = useState("");

  const [values, setValues] = useState({
    nameOfCustomer: "",
    mail: "",
    phoneNumber: "",
    employment: "",
  });

  const emailHandler = useCallback(() => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(values.mail).toLowerCase())) {
      setErrorEmail("❌ Damnn...Your mail is incorrect");
      return true;
    }
    setErrorEmail("");
    return false;
  }, [values]);

  const handleChange = useCallback(
    (field, value) => {
      setValues({ ...values, [field]: value });
    },
    [values]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const isError = emailHandler();
    if (!isError) {
      setclientForm((clientForm) => [...clientForm, { id: newId, ...values }]);
      setNewId((id) => ++id);
      handleClear();
    }
  };

  const deleteForm = (id) => {
    const updateForms = [...clientForm].filter(
      (clientForm) => clientForm.id !== id
    );
    setclientForm(updateForms);
  };

  const handleClickForm = () => {
    JSON.parse(JSON.stringify(clientForm));
  };

  const handleClear = () => {
    setValues({
      nameOfCustomer: "",
      mail: "",
      phoneNumber: "",
      employment: "",
    });

  };

  return (
    <Context.Provider
      value={{
        deleteForm,
        clientForm,
        handleClickForm,
        values,
        handleChange,
        errorEmail,
        handleClear,
      }}
    >
      <section className={styles.General_Info_of_Form_Page}>
        <div className={styles.Main_container}>
          <form className={styles.Form_container} onSubmit={handleSubmit}>
            <FormInputs />
            <RadioButtons />
            <FormBtn />
          </form>
          <Result />
        </div>
      </section>
    </Context.Provider>
  );
};
export default Component;
