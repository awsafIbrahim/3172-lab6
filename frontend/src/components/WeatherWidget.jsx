import React, { useEffect, useState } from "react";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch("/.netlify/functions/weather");

        if (!res.ok) {
          throw new Error(`ERROR STATUS: ${res.status}`);
        }

        const data = await res.json();
        setWeather(data);
      } 
      catch (err) {
        console.error(err);
        setError("Failed to load API data");
      } 
      finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  if (loading){
    return <p>Loading weather…</p>;
  } 
  if (error) {
    return <p className="text">{error}</p>;
  }

  return (
    <div className="card shadow-sm my-5">
      <div className="card-body">
        <h5 className="card-title">Current Weather is: </h5>

        <p><strong>City: </strong> {weather.city}</p>
        <p><strong>Temperature: </strong> {weather.temperature}°C</p>
        <p><strong>Humidity: </strong> {weather.humidity}%</p>

      </div>
    </div>
  );
}
