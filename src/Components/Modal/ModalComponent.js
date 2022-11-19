import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { Action } from "../../Redux/Action/action";

export const ModalComponent = () => {
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
  };
  return (
    <>
      <button className="modal-btn" onClick={handleShow}>
        Login
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {active === "tab1" ? <Modal.Title>Log In</Modal.Title> : ""}
          {active === "tab2" ? <Modal.Title>Sign Up</Modal.Title> : ""}
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="row py-2">
            <div className="col-6 d-flex justify-content-center">
              <Link
                className="anchor sign-btn"
                onClick={() => setActive("tab1")}
              >
                Sign In
              </Link>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <Link
                className="anchor signup-btn"
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
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Create Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
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
                    onChange={(e) => onHandleChange(e)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => signUpSubmit()}
                >
                  Submit
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
