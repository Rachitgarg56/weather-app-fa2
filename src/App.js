import { createContext, useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const WeatherContext = createContext();

function App() {

  const [weatherData,setWeatherData] = useState([]);
  const [highlightenedCity, setHighlightenedCity] = useState('');

  return (
    <WeatherContext.Provider value={{weatherData,setWeatherData,highlightenedCity,setHighlightenedCity}}>
      <div className="h-screen flex flex-col">
        <Navbar/>
        <div className="flex flex-col md:flex-row h-full">
          <Sidebar/>
          <Main/>
        </div>
      </div>
    </WeatherContext.Provider>
  );
}

export { WeatherContext };
export default App;
