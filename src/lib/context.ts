/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { getContext, setContext } from "svelte";
import type { Team, Player } from "./types";
import { ALL_TEAMS_ARRAY_CONTEXT_KEY, ALL_PLAYERS_ARRAY_CONTEXT_KEY } from "./constants";

export const setAllTeamsArrayContext = function (allTeamsArr: Team[]) {
  setContext(ALL_TEAMS_ARRAY_CONTEXT_KEY, allTeamsArr);
};

export const getAllTeamsArrayContext = function () {
  const allTeamsArray = getContext(ALL_TEAMS_ARRAY_CONTEXT_KEY) as Team[];
  return allTeamsArray;
};

export const setAllPlayersArrayContext = function (allPlayersArr: Player[]) {
  setContext(ALL_PLAYERS_ARRAY_CONTEXT_KEY, allPlayersArr);
};

export const getAllPlayersArrayContext = function () {
  const allPlayersArray = getContext(ALL_PLAYERS_ARRAY_CONTEXT_KEY) as Player[];
  return allPlayersArray;
};
