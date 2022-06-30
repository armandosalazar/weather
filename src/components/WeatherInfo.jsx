import styles from "./WeatherInfo.module.css";

export default function WeatherInfo({ weather }) {
  return (
    <div className={styles.info}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>{weather?.location.country}</div>
      <div className={styles.row}>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            alt={weather?.current.condition.text}
            width="120"
          />
        </div>
        <div>
          <div className={styles.condition}>
            {weather?.current.condition.text}
          </div>
          <div className={styles.current}>{weather?.current.temp_c}º</div>
        </div>
      </div>
      <iframe
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3771584.6347150644!2d${weather?.location.lon}7!3d${weather?.location.lat}4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1656440536657!5m2!1ses-419!2smx`}
        width="100%"
        height="200"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
}
