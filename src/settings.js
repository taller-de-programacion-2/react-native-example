import * as Updates from "expo-updates";
import Constants from "expo-constants";
import axios from "axios";

// Release channels: https://docs.expo.dev/distribution/release-channels/
if (Constants.isDevice && Update.releaseChannel.startsWith("prod")) {
  console.disableYellowBox = true;
}
const API_HOST = Constants.manifest.extra.API_HOST;
console.log("API_HOST=", API_HOST);

export const api = axios.create({
  baseURL: API_HOST,
  timeout: 60000,
});
