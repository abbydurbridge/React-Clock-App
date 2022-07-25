import "./App.css";
import ToggleButton from "./ToggleButton";
import HoverButton from "./HoverButton";
import LoginControl from "./components/LoginControl/LoginControl";

const App = (props) => {
  return (
    <>
      <ToggleButton label="Click Me" />
      <HoverButton />
      <LoginControl hasNewMessage={true} credit={0} hasWarning={true} />
    </>
  );
};
export default App;
