import type { Team, Player, WeatherAPIBadResponse, WeatherAPIGoodResponse } from "$lib/types";
import { SPORTSDATA_API_KEY, WEATHER_API_KEY } from "$env/static/private";

export const getAllTeamsFromSportsdataIOAPI = async function () {
  const allTeamsAPIUrl = `https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=${SPORTSDATA_API_KEY}`;
  const res = await fetch(allTeamsAPIUrl);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const allTeams = (await res.json()) as Team[];
  return allTeams;
};

export const getAllAvailablePlayersFromSportsdataIOAPI = async function () {
  const allPlayersAPIURL = `https://api.sportsdata.io/v3/nfl/scores/json/PlayersByAvailable?key=${SPORTSDATA_API_KEY}`;
  const res = await fetch(allPlayersAPIURL);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const allPlayers = (await res.json()) as Player[];
  return allPlayers;
};

export const getStadiumWeatherFromWeatherAPI = async function ({ lat, long }: { lat: number; long: number }) {
  const stadiumWeatherAPIURL = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${lat.toString()},${long.toString()}`;
  const res = await fetch(stadiumWeatherAPIURL);
  if (!res.ok) {
    const errorObj = (await res.json()) as WeatherAPIBadResponse;
    throw new Error(errorObj.error.message);
  }
  const weatherDetails = (await res.json()) as WeatherAPIGoodResponse;
  return weatherDetails;
};
