import { useState } from "react";

export default function Login() {

  const [enteredDetails, setEnteredDetails] = useState({
    email: "",
    password: ""
  });
  const [edit, setEdit] = useState({
    email: false,
    password: false
  });



  const emailIsInValid = edit.email === true && !enteredDetails.email.includes("@")
  const passwordIsInvalid = edit.password === true && !enteredDetails.password.length < 6


  const handleBlur = (identifier) => {
    setEdit((prev) => {
      return {
        ...prev,
        [identifier]: true
      }
    });
  }


  const handleInputChanges = (value, identifier) => {

    setEnteredDetails((prevValues) => {
      return {
        ...prevValues,
        [identifier]: value
      }
    })
    setEdit((prev) => {
      return {
        ...prev,
        [identifier]: false
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(enteredDetails)
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input onBlur={(event) => { handleBlur('email') }} id="email" onChange={(event) => { handleInputChanges(event.target.value, 'email') }} value={enteredDetails.email} type="email" name="email" />
          <div className="control-error">{emailIsInValid && <p>Please enter valid email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" onChange={(event) => { handleInputChanges(event.target.value, 'password') }} value={enteredDetails.password}
            minLength={6}
            type="password" name="password" />
          <div className="control-error">{passwordIsInvalid && <p>Please enter valid password.</p>}</div>

        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
