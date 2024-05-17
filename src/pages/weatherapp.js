import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from 'next/image';

import search_icon from "@/Weatherapp Components/Assets/search.png";
import clear_icon from "@/Weatherapp Components/Assets/clear.png";
import cloud_icon from "@/Weatherapp Components/Assets/cloud.png";
import drizzle_icon from "@/Weatherapp Components/Assets/drizzle.png";
import rain_icon from "@/Weatherapp Components/Assets/rain.png";
import snow_icon from "@/Weatherapp Components/Assets/snow.png";
import wind_icon from "@/Weatherapp Components/Assets/wind.png";
import humidity_icon from "@/Weatherapp Components/Assets/humidity.png";

const WeatherApp = () => {
  const [wicon, setWicon] = useState(cloud_icon);
  const [weatherData, setWeatherData] = useState({
    temperature: "-",
    location: "-",
    country: "-",
    humidity: "-",
    windSpeed: "-",
  });
  const [error, setError] = useState("");

  let api_key = process.env.NEXT_PUBLIC_WEATHER_URI;

  const [city, setCity] = useState("Depok");

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      setError("Please enter a city name");
      return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    try {
      let response = await fetch(url);

      if (!response.ok) {
        throw new Error("City not found");
      }

      let data = await response.json();

      const humidity = data.main.humidity + " %";
      const windSpeed = Math.floor(data.wind.speed) + " km/s";
      const temperature = Math.floor(data.main.temp) + "°C";
      const location = data.name;
      const country = data.sys.country;

      setWeatherData({ temperature, location, humidity, windSpeed, country });

      if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
        setWicon(clear_icon);
      } else if (
        data.weather[0].icon === "02d" ||
        data.weather[0].icon === "02n"
      ) {
        setWicon(cloud_icon);
      } else if (
        data.weather[0].icon === "03d" ||
        data.weather[0].icon === "03n"
      ) {
        setWicon(drizzle_icon);
      } else if (
        data.weather[0].icon === "04d" ||
        data.weather[0].icon === "04n"
      ) {
        setWicon(drizzle_icon);
      } else if (
        data.weather[0].icon === "09d" ||
        data.weather[0].icon === "09n"
      ) {
        setWicon(rain_icon);
      } else if (
        data.weather[0].icon === "10d" ||
        data.weather[0].icon === "10n"
      ) {
        setWicon(rain_icon);
      } else if (
        data.weather[0].icon === "13d" ||
        data.weather[0].icon === "13n"
      ) {
        setWicon(snow_icon);
      } else {
        setWicon(clear_icon);
      }

      setError("");
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData({ 
        temperature: "-",
        location: "-",
        country: "-",
        humidity: "-",
        windSpeed: "-", 
        });
      setError("City not found");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

    // Fetch weather data for London on component mount (first render)
    useEffect(() => {
      search("Depok"); // Call search with default city ("Depok")
    }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <>
    <Head>
      <title>Weather App</title>
    </Head>
      <div className="weather-container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Search a city..."
          defaultValue={city} 
          onKeyPress={handleKeyPress}
        />
        <div className="search-icon" onClick={() => search()}>
          <Image src={search_icon} alt="" />
        </div>
      </div>
        {error && <div className="weather-error-message">{error}</div>}
      <div className="weather-image">
        <Image src={wicon} alt="" />
      </div>
      <div className="weather-temp">{weatherData.temperature}</div>
      <div className="weather-location">{weatherData.location}, {weatherData.country}</div>
      <div className="data-container">
        <div className="element">
          <Image src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{weatherData.humidity}</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <Image src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">{weatherData.windSpeed}</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
      
    </div>
    </>
    
  );
};

export default WeatherApp;

// use thunderlient for checking elements
// https://api.openweathermap.org/data/2.5/weather?q=Depok&units=Metric&appid=$(api_key)