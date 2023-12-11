import "./App.css";

import ParentComponent from "./components/PartentComponent";
import WeatherComponent from "./components/weatherComponent";
import WeatherNewComp from "./components/weatherNewComp";

function App() {
  return (
    <div className="App">
      {/* <WeatherNewComp /> */}
      <ParentComponent />
      {/* <WeatherComponent /> */}
    </div>
  );
}

export default App;
