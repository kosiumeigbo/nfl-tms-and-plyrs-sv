import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ params, parent }) {
  const { key } = params;
  const { allTeams } = await parent();
  const teamObj = allTeams.find((team) => team.Key === key);

  if (!teamObj) {
    error(400, "Something is wrong as we can't find a team with this key");
  }
  return { teamObj };
};
