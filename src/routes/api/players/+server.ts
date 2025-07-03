import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import type { Player, APIResponse } from "$lib/types";

export const GET: RequestHandler = ({ url }) => {
  const searchInput = url.searchParams.get("search");
  if (!searchInput) {
    const responseData: APIResponse = { success: false, error: "Input is invalid", status: 400 };
    return json(responseData);
  }

  const responseData: APIResponse<Player[]> = { success: true, data: [] };
  return json(responseData);
};
