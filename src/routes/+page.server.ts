import type { PageServerLoad } from "./$types";
import type { Team } from "$lib/types";
import { SPORTSDATA_API_KEY } from "$env/static/private";

/* export const load: PageServerLoad = async function () {
  const allTeamsAPIUrl = `https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=${SPORTSDATA_API_KEY}`;
  const res = await fetch(allTeamsAPIUrl);
  const allTeams = (await res.json()) as Team[];
  return { allTeams };
}; */
