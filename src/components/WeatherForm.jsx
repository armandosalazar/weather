import { useState } from "react";
import styles from "./WeatherForm.module.css";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function onChange(evt) {
    const value = evt.target.value;
    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input type="text" onChange={onChange} className={styles.input} />
    </form>
  );
}
