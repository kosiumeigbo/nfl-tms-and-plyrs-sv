import { getAllTeamsArrayContext } from "$lib/context";
import type { PageServerLoad } from "./$types";
// import type { Team } from "$lib/types";
// import { SPORTSDATA_API_KEY } from "$env/static/private";

export const load: PageServerLoad = function ({ params }) {
  const allTeamsArray = getAllTeamsArrayContext();
  const teamObj = allTeamsArray.find((tm) => tm.Key === params.key);
  return { teamObj };
};
