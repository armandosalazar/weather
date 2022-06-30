import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	base: '/weather/',
  define: {
    process: {
      env: {
        REACT_APP_KEY: "71b689e8b8884ad280a160620222806",
        REACT_APP_URL: "http://api.weatherapi.com/v1/current.json?aqi=no",
      },
    },
  },
});
