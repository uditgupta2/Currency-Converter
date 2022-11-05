import Box from "@mui/material/Box";
import { Alert, Button } from "@mui/material";
import { useState } from "react";
import "./LoginForm.css";
import HomePage from "./HomePage";

const LoginForm = () => {
  const initialValues = { username: "", email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  localStorage.setItem("username", formValues.username);
  localStorage.setItem("email", formValues.email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.username) {
      errors.username = "Username is Required";
    }
    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email.";
    }
    return errors;
  };

  const date = new Date();

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formErrors);
  };

  return (
    <div className="form-container">
      <Box sx={{ width: "auto" }} className="form-box">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <>
            <HomePage />
          </>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <input
              type="text"
              value={formValues.username}
              name="username"
              placeholder="Username"
              className="inputs"
              onChange={handleChange}
            />
            <p>{formErrors.username}</p>
            <input
              type="email"
              name="email"
              value={formValues.email}
              placeholder="Email"
              className="inputs"
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>
            <Button
              variant="contained"
              className="primary-button"
              type="submit"
            >
              Submit
            </Button>
          </form>
        )}
      </Box>
    </div>
  );
};

export default LoginForm;
