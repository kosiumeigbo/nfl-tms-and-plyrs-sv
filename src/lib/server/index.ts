import type { Team, Player } from "$lib/types";
import { SPORTSDATA_API_KEY } from "$env/static/private";

export const getAllTeamsFromSportsdataIOAPI = async function () {
  const allTeamsAPIUrl = `https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=${SPORTSDATA_API_KEY}`;
  const res = await fetch(allTeamsAPIUrl);
  const allTeams = (await res.json()) as Team[];
  return allTeams;
};

export const getAllAvailablePlayersFromSportsdataIOAPI = async function () {
  const allPlayersAPIURL = `https://api.sportsdata.io/v3/nfl/scores/json/PlayersByAvailable?key=${SPORTSDATA_API_KEY}`;
  const res = await fetch(allPlayersAPIURL);
  const allPlayers = (await res.json()) as Player[];
  return allPlayers;
};
