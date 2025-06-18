import type { PageServerLoad } from "./$types";
import type { Team } from "$lib/types";
import { SPORTSDATA_API_KEY } from "$env/static/private";
import { setAllTeamsArrayContext } from "$lib/context";

export const load: PageServerLoad = async function ({ fetch }) {
  const allTeamsAPIUrl = `https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=${SPORTSDATA_API_KEY}`;
  const res = await fetch(allTeamsAPIUrl);
  const allTeams = (await res.json()) as Team[];
  setAllTeamsArrayContext(allTeams);
  return { allTeams };
};
