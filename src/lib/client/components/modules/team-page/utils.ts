import type { WeatherAPIGoodResponse } from "$lib/types";

export const getStadiumWeatherData = async function ({ lat, long }: { lat: number; long: number }) {
  const res = await fetch(`/api/weather/?lat=${lat.toString()}&long=${long.toString()}`);
  return (await res.json()) as WeatherAPIGoodResponse;
};
