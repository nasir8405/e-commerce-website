import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "../../Redux/Action/action";
import "./LoginSignup.css";

export const LoginSignup = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [active, setActive] = useState("tab1");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { firstName, lastName, email, password } = user;
  const onHandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const signUpSubmit = () => {
    if (
      user.firstName !== "" &&
      user.lastName !== "" &&
      user.email !== "" &&
      user.password !== ""
    ) {
      dispatch(
        Action({
          type: "ADDUSER",
          payload: user,
        })
      );
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      setActive("tab1");
    }
  };
  const [signInDeatil, setSignInDeatil] = useState({
    signinEmail: "",
    siginPassword: "",
  });
  const { signinEmail, siginPassword } = signInDeatil;
  const signinOnChangeHandle = (e) => {
    setSignInDeatil({ ...signInDeatil, [e.target.name]: e.target.value });
  };
  const users = useSelector((state) => state.reducer.users);
  const signInSubmit = () => {
    if (users.length !== 0) {
      for (let index = 0; index < users.length; index++) {
        if (
          users[index].email === signInDeatil.signinEmail &&
          users[index].password === signInDeatil.siginPassword
        ) {
          dispatch(
            Action({
              type: "SETUSER",
              payload: users[index],
            })
          );
        } else {
          alert("Hi");
        }
      }
    } else {
      alert("Please SignUp First");
      setActive("tab2");
    }
  };
  return (
    <>
      <button onClick={handleShow}>Login/Signup</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {active === "tab1" ? <Modal.Title>Log In</Modal.Title> : ""}
          {active === "tab2" ? <Modal.Title>Sign Up</Modal.Title> : ""}
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="row py-2">
            <div className="col-6 d-flex justify-content-center">
              <Link
                className={`${active === "tab1" ? "active" : ""}`}
                onClick={() => setActive("tab1")}
              >
                Sign In
              </Link>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <Link
                className={`${active === "tab2" ? "active" : ""}`}
                onClick={() => setActive("tab2")}
              >
                Sign Up
              </Link>
            </div>
          </div>
          <hr className="m-0" />
          {active === "tab1" ? (
            <div className="signIn p-4">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="signinEmail"
                    value={signinEmail}
                    onChange={(e) => signinOnChangeHandle(e)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Create Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="siginPassword"
                    value={siginPassword}
                    onChange={(e) => signinOnChangeHandle(e)}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="w-100"
                  onClick={() => signInSubmit()}
                >
                  Sign In
                </Button>
              </Form>
            </div>
          ) : (
            ""
          )}
          {active === "tab2" ? (
            <div className="signUp p-4">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    value={firstName}
                    className={`${
                      user.firstName === "" ? "border-danger" : ""
                    }`}
                    onChange={(e) => onHandleChange(e)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    value={lastName}
                    className={`${user.lastName === "" ? "border-danger" : ""}`}
                    onChange={(e) => onHandleChange(e)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    className={`${user.email === "" ? "border-danger" : ""}`}
                    onChange={(e) => onHandleChange(e)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    className={`${user.password === "" ? "border-danger" : ""}`}
                    onChange={(e) => onHandleChange(e)}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="w-100"
                  onClick={() => signUpSubmit()}
                >
                  Sign Up
                </Button>
              </Form>
            </div>
          ) : (
            ""
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
