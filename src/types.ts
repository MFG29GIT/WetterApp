export type LocationResult = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id: number;
  admin3_id: number;
  admin4_id: number;
  timezone: string;
  population: number;
  postcodes: string[]; // Array von Strings
  country_id: number;
  country: string;
  admin1: string;
  admin2: string;
  admin3: string;
  admin4: string;
};

export type LocationResponse = {
  results: LocationResult[]; // Array von LocationResult-Objekten
};

export type LocationType = {
  latitude: number;
  longitude: number;
};

export type WeatherResult = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather_units: {
    time: string; // ISO 8601 formatted date
    interval: string;
    temperature: string;
    windspeed: string;
    winddirection: string;
    is_day: string;
    weathercode: string;
  };
  current_weather: {
    time: string; // ISO 8601 formatted date
    interval: number;
    temperature: number;
    windspeed: number;
    winddirection: number;
    is_day: number;
    weathercode: number;
  };
};

export type WeatherResponse = {
  weatherResults: WeatherResult[];
};

export type CityWeatherData = {
  temperature: number;
  windspeed: number;
};
