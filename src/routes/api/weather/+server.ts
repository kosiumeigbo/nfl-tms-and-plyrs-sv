import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { getStadiumWeatherFromWeatherAPI } from "$lib/server";

export const GET: RequestHandler = async ({ url, setHeaders }) => {
  const latSearchParam = url.searchParams.get("lat");
  const longSearchParam = url.searchParams.get("long");

  if (latSearchParam === null || longSearchParam === null) {
    throw new Error("Incomplete location input parameters");
  }
  const lat = parseFloat(latSearchParam);
  const long = parseFloat(longSearchParam);

  const stadiumWeatherData = await getStadiumWeatherFromWeatherAPI({ lat, long });

  setHeaders({ "cache-control": "private, max-age=900" });
  return json(stadiumWeatherData);
};
