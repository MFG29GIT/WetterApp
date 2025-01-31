// location-service.ts
import { useQuery } from "@tanstack/react-query";
import { GEODATA_API_URL } from "../constants";
import { LocationResponse, LocationType } from "../types";

export const useGeolocation = (cityName: string) => {
  return useQuery<LocationType>({
    queryKey: ["geolo", cityName],
    enabled: cityName !== "", // Nur ausführen, wenn cityName vorhanden ist
    queryFn: async (): Promise<LocationType> => {
      const response = await fetch(`${GEODATA_API_URL}${cityName}`);
      const data: LocationResponse = await response.json();

      if (!data.results || data.results.length === 0) {
        throw new Error("No results found for the city");
      }

      const { latitude, longitude } = data.results[0];
      return { latitude, longitude };
    },
  });
};

// export async function fetchLocationData(
//   cityName: string,
// ): Promise<LocationType | undefined> {
//   try {
//     const response = await fetch(`${GEODATA_API_URL}${cityName}`);

//     if (!response.ok) {
//       throw new Error(`Failed to fetch location data: ${response.statusText}`);
//     }

//     const data: LocationResponse = await response.json();

//     if (data.results.length === 0) {
//       throw new Error("No location data found.");
//     }

//     const { latitude, longitude } = data.results[0];
//     return { latitude: latitude, longitude: longitude }; // Matches LocationType
//   } catch (error) {
//     console.error("Error fetching location data:", error);
//     return undefined;
//   }
// }
