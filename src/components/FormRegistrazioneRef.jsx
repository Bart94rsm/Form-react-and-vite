import { useRef } from "react";

function FormRegistrazioneRef() {
  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const privacyRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nomeRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Form Registrazione</h3>
      <div className="form-field-container">
        <label htmlFor="nome">Nome</label>
        <input
          ref={nomeRef}
          name="nome"
          type="text"
          id="nome"
          placeholder="Nome"
        />
      </div>
      <div className="form-field-container">
        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          name="email"
          type="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className="form-field-container">
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          name="password"
          type="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="form-field-container">
        <input ref={privacyRef} type="checkbox" /> Dichiaro di aver preso
        visione della privacy
      </div>
      <div className="form-field-container">
        <button type="submit">Invia</button>
      </div>
    </form>
  );
}

export default FormRegistrazioneRef;
