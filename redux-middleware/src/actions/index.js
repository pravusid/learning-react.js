import axios from "axios";
import { apiKey } from "../../.api-key";

const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=metric`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${URL}&q=${city},kr`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
