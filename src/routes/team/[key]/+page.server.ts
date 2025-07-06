import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = function ({ params }) {
  const { key } = params;
  return { teamKey: key };
};
