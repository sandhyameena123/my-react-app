import axios from "axios";
import { useState } from "react";

export function My_Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_KEY;
  console.log(API_KEY)




  const getWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    try {
      setError("");
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(response.data);
    } catch (err) {
      setError("City not found");
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-400 p-4">
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-md text-white">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          🌤 Weather App
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={getWeather}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Search
          </button>
        </div>

        {error && (
          <p className="text-red-200 text-center mb-4">{error}</p>
        )}

        {weather && (
          <div className="text-center mt-6 space-y-2">
            <h2 className="text-2xl font-semibold">{weather.name}</h2>
            <p className="text-4xl font-bold">
              {weather.main.temp}°C
            </p>
            <p className="text-lg">
              {weather.weather[0].main}
            </p>
            <div className="flex justify-between mt-4 text-sm">
              <p>💧 {weather.main.humidity}%</p>
              <p>🌬 {weather.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}