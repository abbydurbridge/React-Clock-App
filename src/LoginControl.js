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
    </div>
  );
};
export default LoginControl;
