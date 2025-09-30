import { useState } from "react";

export default function Login() {

  const [enteredValues, setEnteredValues] = useState({
  email: "",
  password: "",
});

function handleSubmit(event) {
  event.preventDefault();
  console.log(enteredValues);
}

function handleOnChange(event, field) {
  setEnteredValues((prev) => ({
    ...prev,
    [field]: event.target.value,
  }));
}

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={enteredValues.email}
            name="email"
            onChange={(event) => handleOnChange(event, "email")}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={enteredValues.password}
            name="password"
            onChange={(event) => handleOnChange(event, "password")}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
