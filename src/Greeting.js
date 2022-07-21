import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

const Greeting = (props) => {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
};
export default Greeting;
