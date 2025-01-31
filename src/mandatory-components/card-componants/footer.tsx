import { CityWeatherData } from "../../types";

type FooterProps = {
  weather: CityWeatherData | undefined;
};

export function Footer({ weather }: FooterProps) {
  return (
    <div className="text-purple-600">
      Windgeschwindigkeit: {weather?.windspeed ?? 0} km/h
    </div>
  );
}
