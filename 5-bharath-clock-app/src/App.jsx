import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClockHeader from "./components/ClockHeader";
import ClockSlogan from "./components/ClockSlogan";
import ClockTime from "./components/ClockTime";

function App() {
  return (
    <center>
      <ClockHeader />
      <ClockSlogan />
      <ClockTime />
    </center>
  );
}

export default App;
