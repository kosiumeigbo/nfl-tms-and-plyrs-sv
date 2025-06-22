/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { getContext, setContext } from "svelte";
import type { Team } from "./types";
import { ALL_TEAMS_ARRAY_CONTEXT_KEY, INITIAL_PLAYER_SEARCH_INPUT_CONTEXT_KEY } from "./constants";

export const setAllTeamsArrayContext = function (allTeamsArr: Team[]) {
  setContext(ALL_TEAMS_ARRAY_CONTEXT_KEY, allTeamsArr);
};

export const getAllTeamsArrayContext = function () {
  const allTeamsArray = getContext(ALL_TEAMS_ARRAY_CONTEXT_KEY) as Team[];
  return allTeamsArray;
};

export const setInitialPlayerSearchInputValue = function (val: string) {
  setContext(INITIAL_PLAYER_SEARCH_INPUT_CONTEXT_KEY, val);
};

export const getInitialPlayerSearchInputValue = function () {
  const initialPlayerSearchInputValue = getContext(INITIAL_PLAYER_SEARCH_INPUT_CONTEXT_KEY) as string;
  return initialPlayerSearchInputValue;
};
