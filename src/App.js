import "./App.css";
// import Clock from "./Clock";
import ToggleButton from "./ToggleButton";
import HoverButton from "./HoverButton";

const App = (props) => {
  return (
    <>
      {/* <Clock date={new Date()} /> */}
      <ToggleButton label="Click Me" />
      <HoverButton />
    </>
  );
};
export default App;
