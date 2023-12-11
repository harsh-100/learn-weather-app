import React, { useEffect, useState } from "react";

import { Circles } from "react-loader-spinner";

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(""); // Set the default city here or through user input
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(
    "🚀 ~ file: weatherComponent.jsx:12 ~ WeatherComponent ~ apiKey:",
    apiKey
  );
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  // const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        setError(null);

        // throw new Error("Testing error");
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(
          "🚀 ~ file: weatherComponent.jsx:20 ~ fetchWeatherData ~ data:",
          data
        );

        if (response.ok) {
          setWeatherData(data);
          setError("");
        } else {
          setError(data.message);
          setWeatherData();
        }
      } catch (error) {
        setError("An error occurred while fetching the data");
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city, apiUrl]);

  return (
    <div>
      <h2>Weather Information</h2>
      <label htmlFor="cityInput">Enter City:</label>
      <input
        type="text"
        id="cityInput"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {loading && (
        <>
          <div>
            <Circles
              height="80"
              width="80"
              color="blue"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && (
        <div>
          <h3>
            {weatherData.name}, {weatherData.sys.country}
          </h3>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
