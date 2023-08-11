import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if(e.target.value.length < 2) {
      setErrorFirstName("That field must be at least 2 characters.");
    } else {
      setErrorFirstName("");
    }
  }
  const handleLasttName = (e) => {
    setLastName(e.target.value);
    if(e.target.value.length < 2) {
      setErrorLastName("That field must be at least 2 characters.");
    } else {
      setErrorLastName("");
    }
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 5) {
      setErrorEmail("The field must be at least 5 characters");
    } else {
      setErrorEmail("");
    }
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 8) {
      setErrorPassword("The passwords must be at least 8 characters.");
    } else {
      setErrorPassword("");
    }
  }
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if(e.target.value.length < 8) {
      setErrorConfirmPassword("The passwords must match.");
    } else {
      setErrorConfirmPassword("");
    }
  }

  return (
    <>
      <form>
        <div className="input-data">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname"  onChange={ handleFirstName }  />
        </div>
        {errorFirstName ? <p> { errorFirstName } </p> : '' } 

        <div className="input-data">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" onChange={ handleLasttName }  />
        </div>
        {errorLastName ? <p> { errorLastName } </p> : '' }

        <div className="input-data">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={ handleEmail } /> 
        </div>
        {errorEmail ? <p> { errorEmail } </p> : '' }

        <div className="input-data">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={ handlePassword } />
        </div>
        {errorPassword ? <p> { errorPassword } </p> : '' }

        <div className="input-data">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" onChange={ handleConfirmPassword } />
        </div>
        {errorConfirmPassword ? <p> { errorConfirmPassword } </p> : '' }
      </form>
      
      <p>Your Form Data</p>
      {firstName && <p>First Name {firstName}</p> }
      {lastName && <p>Last Name {lastName}</p> }
      {email && <p>Email {email}</p> }
      {password && <p>Password {password}</p> }
      {confirmPassword && <p>Confirm Password {confirmPassword}</p> }
    </>
  );
};

export default Form;
