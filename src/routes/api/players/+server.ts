import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import type { Player, APIResponse } from "$lib/types";
import { getAllAvailablePlayersFromSportsdataIOAPI } from "$lib/server";

export const GET: RequestHandler = async ({ url, setHeaders }) => {
  const searchInput = url.searchParams.get("search");
  if (!searchInput || searchInput === "") {
    const responseData: APIResponse = { success: false, error: "Input is invalid", status: 400 };
    return json(responseData);
  }
  const allPlayers = await getAllAvailablePlayersFromSportsdataIOAPI();
  console.log(searchInput.split(""));
  setHeaders({ "cache-control": "private, max-age=604800" });
  const responseData: APIResponse<Player[]> = { success: true, data: allPlayers };
  return json(responseData);
};
