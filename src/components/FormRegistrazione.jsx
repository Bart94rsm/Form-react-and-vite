import { useState } from "react";
import { useId } from "react";

function FormRegistrazione() {
  const idPrefix = useId();
  const [formValue, setFormValue] = useState({
    nome: "",
    email: "",
    password: "",
    privacyCheck: false,
  });
  const handleTextInput = (e) => {
    setFormValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCheckbox = (e) => {
    setFormValue((prev) => {
      return { ...prev, privacyCheck: !prev.privacyCheck };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inviato");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Form Registrazione</h3>
      <div className="form-field-container">
        <label htmlFor={idPrefix + "-nome"}>Nome</label>
        <input
          value={formValue.nome}
          onChange={handleTextInput}
          name="nome"
          type="text"
          id={idPrefix + "-nome"}
          placeholder="Nome"
        />
      </div>
      <div className="form-field-container">
        <label htmlFor={idPrefix + "-email"}>Email</label>
        <input
          value={formValue.email}
          onChange={handleTextInput}
          name="email"
          type="email"
          id={idPrefix + "-email"}
          placeholder="Email"
        />
      </div>
      <div className="form-field-container">
        <label htmlFor={idPrefix + "-password"}>Password</label>
        <input
          value={formValue.password}
          onChange={handleTextInput}
          name="password"
          type="password"
          id={idPrefix + "-password"}
          placeholder="Password"
        />
      </div>
      <div className="form-field-container">
        <input onChange={handleCheckbox} type="checkbox" /> Dichiaro di aver
        preso visione della privacy
      </div>
      <div className="form-field-container">
        <button type="submit">Invia</button>
      </div>
    </form>
  );
}

export default FormRegistrazione;
