import type { PageServerLoad } from "./$types";
import { getAllTeamsFromSportsdataIOAPI } from "$lib/server";

export const load: PageServerLoad = async function ({ setHeaders, url }) {
  const initialSearchInput = url.searchParams.get("search") ?? "";
  console.log(url.searchParams);
  const allTeams = await getAllTeamsFromSportsdataIOAPI();
  setHeaders({ "cache-control": "private, max-age=604800" });
  return { allTeams, initialSearchInput };
};
