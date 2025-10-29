import { useState } from "react";
import Input from '../components/Input';
import { isEmail, hasMinLength, isNotEmpty } from '../util/validation';

export default function Login() {

  const [enteredValues, setEnteredValues] = useState({
  email: "",
  password: "",
});

const [touchedInputs, setTouchedInputs] = useState({
  email: false,
  password: false
})

function handleSubmit(event) {
  event.preventDefault();
  console.log(enteredValues);

  setEnteredValues({
    email: "",
    password: "",
  });
}

function handleOnChange(event, field) {
  setEnteredValues((prev) => ({
    ...prev,
    [field]: event.target.value,
  }));
}

function handleInputBlur(field) {
  setTouchedInputs((prev) => ({
    ...prev,
    [field]: true,
  }));
}

const emailIsInvalid = isNotEmpty(touchedInputs.email) && !isEmail(enteredValues.email);
const passwordIsInvalid =  isNotEmpty(touchedInputs.password) && !hasMinLength(enteredValues.password, 6);
const formIsInvalid = emailIsInvalid && passwordIsInvalid;

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Login</h2>

      <div className="control-row">
          <Input
            label="Email"
            id="email"
            type="email"
            value={enteredValues.email}
            name="email"
            onChange={(event) => handleOnChange(event, "email")}
            onBlur={() => handleInputBlur('email')}
            error={ emailIsInvalid && "Please enter a valid email address" }
          />

          <Input
            label="Password"
            id="password"
            type="password"
            value={enteredValues.password}
            name="password"
            onChange={(event) => handleOnChange(event, "password")}
            onBlur={() => handleInputBlur('password')}
            error={ passwordIsInvalid && "Please enter a valid Password" }
          />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
