import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";
import styles from "./WeatherApp.module.css";
import Loading from "./Loading";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  /**
   * ? Se pude usar cuando:
   * - carga la aplicación
   * - existe un render
   * - el componente se destruye
   */
  useEffect(() => {
    loadInfo();
  }, []); // Solo se ejecuta una vez por: []

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]); // Cada que cambie el state de weather se ejecutar.
  // useEffect, funciona para poder manejar efectos laterales.

  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        // ! process is undefined on vite
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );

      const json = await request.json();
      setTimeout(() => {
        setWeather(json);
      }, 500);
    } catch (err) {
      alert(err);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city === "" ? "mexico city" : city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {/* ?: indica que es opcional es decir evita algo como null pointer */}
      {weather ? <WeatherInfo weather={weather} /> : <Loading />}
    </div>
  );
}
