import "./App.css";
// import Clock from "./Clock";
import ToggleButton from "./ToggleButton";
import HoverButton from "./HoverButton";
import Greeting from "./Greeting";
import LoginControl from "./LoginControl";

const App = (props) => {
  return (
    <>
      {/* <Clock date={new Date()} /> */}
      <ToggleButton label="Click Me" />
      <HoverButton />
      <LoginControl />
    </>
  );
};
export default App;
