import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import { Action } from "../../../Redux/Action/action";
import "./User.css";

export const User = ({ user }) => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(
      Action({
        type: "LOGOUT",
      })
    );
  };
  return (
    <Dropdown>
      <Dropdown.Toggle>Account</Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="px-3">
          <div>
            {`${user.firstName} `}
            {user.lastName}
          </div>
          <div>Profile</div>
          <button onClick={() => logoutUser()}>Logout</button>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};
