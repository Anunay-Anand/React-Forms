import { useInput } from "../hooks/useInput";
import Input from '../components/Input';
import { isEmail, hasMinLength, isNotEmpty } from '../util/validation';

export default function Login() {

const { value: enteredEmail, isTouched: emailTouched, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur, hasError: emailHasError } = useInput('', value => isEmail(value) && isNotEmpty(value));
const { value: enteredPassword, isTouched: passwordTouched, handleInputChange: handlePasswordChange, handleInputBlur: handlePasswordBlur, hasError: passwordHasError } = useInput('', value => hasMinLength(value, 6) && isNotEmpty(value));

// const formIsInvalid = emailIsInvalid && passwordIsInvalid;

function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError && passwordHasError) {
        // Submit form logic here
        console.log('Form submitted:', { email: enteredEmail, password: enteredPassword });
    }
}

console.log('Email valid:', emailHasError, 'Password valid:', passwordHasError);

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Login</h2>

      <div className="control-row">
          <Input
            label="Email"
            id="email"
            type="email"
            value={ enteredEmail }
            name="email"
            onChange={(event) => handleEmailChange(event)}
            onBlur={() => handleEmailBlur()}
            error={ emailHasError && "Please enter a valid email address" }
          />

          <Input
            label="Password"
            id="password"
            type="password"
            value={ enteredPassword }
            name="password"
            onChange={(event) => handlePasswordChange(event)}
            onBlur={() => handlePasswordBlur('password')}
            error={ passwordHasError && "Please enter a valid Password" }
          />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
