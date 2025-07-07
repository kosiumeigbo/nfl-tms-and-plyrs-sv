import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ params, parent }) {
  const { key } = params;
  const { allTeams, allPlayers } = await parent();
  console.log(allPlayers);
  const team = allTeams.find((team) => team.Key === key);

  if (!team) {
    error(400, "Something is wrong as we can't find a team with this key");
  }

  const teamPlayers = allPlayers.filter((player) => player.Team === key);
  return { team, teamPlayers };
};
