import type { LayoutServerLoad } from "./$types";
import { getAllTeamsFromSportsdataIOAPI, getAllAvailablePlayersFromSportsdataIOAPI } from "$lib/server";
import type { Team, Player } from "$lib/types";

export const load: LayoutServerLoad = async function ({ setHeaders, url }) {
  try {
    const promises = Promise.all([getAllTeamsFromSportsdataIOAPI(), getAllAvailablePlayersFromSportsdataIOAPI()]);
    const [allTeams, allPlayers] = await promises;
    setHeaders({ "cache-control": "private, max-age=604800" });
    return { allTeams, allPlayers };
  } catch (e) {
    return { allTeams: [], allPlayers: [] } as { allTeams: Team[]; allPlayers: Player[] };
  }
};
