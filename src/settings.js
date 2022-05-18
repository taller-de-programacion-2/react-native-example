import * as Updates from "expo-updates";
import Constants from "expo-constants";
import * as Device from "expo-device";
import axios from "axios";

// Release channels: https://docs.expo.dev/distribution/release-channels/
if (Device.isDevice && Updates.releaseChannel.startsWith("prod")) {
  console.disableYellowBox = true;
}

export const API_HOST = Constants.manifest.extra.API_HOST;
console.log("API_HOST=", API_HOST);
