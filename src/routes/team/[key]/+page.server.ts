import type { PageServerLoad } from "./$types";
// import type { Team } from "$lib/types";
// import { SPORTSDATA_API_KEY } from "$env/static/private";

export const load: PageServerLoad = function ({ params }) {
  return { params };
};
