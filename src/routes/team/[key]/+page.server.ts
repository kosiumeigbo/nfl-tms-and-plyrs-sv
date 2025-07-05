import { getAllTeamsFromSportsdataIOAPI } from "$lib/server";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ params, setHeaders }) {
  const allTeamsArray = await getAllTeamsFromSportsdataIOAPI();
  const teamObj = allTeamsArray.find((tm) => tm.Key === params.key);
  setHeaders({ "cache-control": "private, max-age=604800" });
  return { teamObj };
};
