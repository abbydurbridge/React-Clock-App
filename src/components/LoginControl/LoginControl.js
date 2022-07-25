import { useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Greeting from "./Greeting";

const LoginControl = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(isLoggedIn ? false : true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(isLoggedIn ? false : true);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}

      {/* Inline if with &&  */}
      {props.hasNewMessage && <h2>You have new messages</h2>}

      {/* Inline if else ? */}
      {props.credit > 0 ? (
        <h3>You have {props.credit} credit</h3>
      ) : (
        <h3>You have no credit</h3>
      )}

      {/* prevent render */}
      {props.hasWarning ? <h4>Account Overdue</h4> : null}
    </div>
  );
};
export default LoginControl;
