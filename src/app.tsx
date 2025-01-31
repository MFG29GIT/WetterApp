import { ChangeEvent, useState, useEffect } from "react";
import { Container } from "./container";
import { WeatherInputForm } from "./mandatory-components/weatherInputForm";
import { useGeolocation } from "./services/location-service";
import { useWeatherData } from "./services/weather-service";

export function App() {
  const [city, setCity] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(city);

  // Geolocation query: Wird nur ausgeführt, wenn der debouncedValue (also nach Verzögerung) gesetzt ist
  const {
    data: locationData,
    error: _locationError,
    isLoading: _locationLoading,
  } = useGeolocation(debouncedValue); // Verwende debouncedValue anstatt city direkt

  // Weather query: Wird nur ausgeführt, wenn locationData vorhanden ist
  const { data: weatherData, error: _weatherError } = useWeatherData(
    locationData?.latitude || 0, // Wenn locationData vorhanden ist
    locationData?.longitude || 0, // Wenn locationData vorhanden ist
  );

  function handleCityChange(e: ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(city); // Setze den Debounced-Wert nach 350 ms
    }, 350);

    return () => {
      clearTimeout(timeoutId); // Bereinige den Timeout, wenn city sich ändert
    };
  }, [city]);

  return (
    <Container>
      {/* Hier wird das Formular nur angezeigt, wenn ein Stadtname eingegeben wurde */}
      <WeatherInputForm
        weather={weatherData}
        city={city}
        onCityChange={handleCityChange}
      />

      {/* Optionale Anzeige von Fehlern, wenn keine Standortdaten vorhanden sind */}
      {!locationData && city && (
        <p>No location data available. Please check the city name.</p>
      )}
    </Container>
  );
}
