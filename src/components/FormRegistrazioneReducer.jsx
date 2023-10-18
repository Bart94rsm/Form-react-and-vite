import { useReducer } from "react";

function stateReducer(state, action) {
  if (action.type === "UPDATE") {
    return { ...state, [e.target.name]: e.target.value };
  }
  if (action.type === "CHECK") {
    return { ...state, privacyCheck: !prev.privacyCheck };
  }
}

function FormRegistrazioneReducer() {
  const formValue = {
    nome: "",
    email: "",
    password: "",
    privacyCheck: false,
  };
  const [form, dispatch] = useReducer(stateReducer, formValue);

  const handleTextInput = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE", name: name, value: value });
  };
  const handleCheckbox = () => {
    const { privacyCheck } = formValue;
    dispatch({ type: "CHECK", privacyCheck });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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

export default FormRegistrazioneReducer;
