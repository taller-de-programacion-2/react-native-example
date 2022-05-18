import { API_HOST } from "./settings";
import axios from "axios";

console.log("API_HOST=", API_HOST);

export const api = axios.create({
  baseURL: API_HOST,
  timeout: 60000,
});
