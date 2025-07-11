import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ params, parent }) {
  const { playerId: playerIdString } = params;
  const playerId = parseInt(playerIdString);
  const { allPlayers, allTeams } = await parent();
  const player = allPlayers.find((player) => player.PlayerID === playerId);

  if (!player) {
    error(400, "Something is wrong as we can't find a player with this id");
  }

  const team = allTeams.find((team) => team.Key === player.Team);
  return { player, team };
};
