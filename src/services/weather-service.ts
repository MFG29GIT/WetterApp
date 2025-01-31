// weather-service.ts
import { useQuery } from "@tanstack/react-query";
import { WEATHER_API_URL } from "../constants";
import { CityWeatherData, WeatherResult } from "../types";

export const useWeatherData = (latitude: number, longitude: number) => {
  return useQuery<CityWeatherData>({
    queryKey: ["weatherData", latitude, longitude],
    enabled: latitude !== 0 && longitude !== 0, // Abfrage nur, wenn gültige Koordinaten vorhanden sind
    queryFn: async (): Promise<CityWeatherData> => {
      const response = await fetch(
        `${WEATHER_API_URL}latitude=${latitude}&longitude=${longitude}`,
      );
      const data: WeatherResult = await response.json();

      if (!data.current_weather) {
        throw new Error("No weather data available");
      }

      const { temperature, windspeed } = data.current_weather;
      return { temperature, windspeed };
    },
  });
};

// export async function fetchLocationWeather(
//   latitude: number,
//   longitude: number,
// ) {
//   try {
//     const response = await fetch(
//       `${WEATHER_API_URL}latitude=${latitude}&longitude=${longitude}`,
//     );
//     if (!response.ok) {
//       throw new Error(`Failed to fetch weather data: ${response.statusText}`);
//     }

//     const data: WeatherResult = await response.json();

//     console.log("Weather API response:", data); // was bekomme ich überhaupt?

//     if (data.current_weather) {
//       const { temperature, windspeed } = data.current_weather;
//       return { temperature, windspeed };
//     } else {
//       throw new Error("No current_weather data found.");
//     }
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//     return undefined;
//   }
// }
