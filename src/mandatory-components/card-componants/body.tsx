import { CityWeatherData } from "../../types";

type BodyProps = {
  weather: CityWeatherData | undefined;
};

export function Body({ weather }: BodyProps) {
  return (
    <div className="text-purple-600">
      Temperatur: {weather?.temperature ?? 0} °C
    </div>
  );
}
