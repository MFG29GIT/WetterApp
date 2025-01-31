// import { useEffect, useState } from "react";
// import { LocationType } from "../types";
import { CityWeatherData } from "../types";
import { Body } from "./card-componants/body";
import { Footer } from "./card-componants/footer";
import { Header } from "./card-componants/header";
// import { fetchLocationData } from "../services/weather-service";

type WeatherInputFormProps = {
  weather?: CityWeatherData;
  city: string;
  onCityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// In WeatherInputForm.tsx
export function WeatherInputForm({
  weather,
  city,
  onCityChange,
}: WeatherInputFormProps) {
  return (
    <div>
      <div className="flex gap-1">
        <input
          type="text"
          className="mb-4 mt-4 w-full max-w-xs animate-pulse rounded-md border border-purple-600 bg-slate-900 p-2 text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={city}
          onChange={onCityChange}
        />
        <button
          type="submit"
          className="mb-4 mt-4 rounded-lg bg-purple-600 px-6 py-2 font-bold text-slate-900 transition-all hover:bg-purple-700"
        >
          Search
        </button>
      </div>
      <Header city={city} />
      <Body weather={weather} />
      <Footer weather={weather} />
    </div>
  );
}
