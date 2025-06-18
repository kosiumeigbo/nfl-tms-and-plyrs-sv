/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { getContext, setContext } from "svelte";
import type { Team } from "./types";

const ALL_TEAMS_ARRAY_CONTEXT_KEY = "allTeamsArray";

export const setAllTeamsArrayContext = function (allTeamsArr: Team[]) {
  setContext(ALL_TEAMS_ARRAY_CONTEXT_KEY, allTeamsArr);
};

export const getAllTeamsArrayContext = function () {
  const allTeamsArray = getContext(ALL_TEAMS_ARRAY_CONTEXT_KEY) as Team[];
  return allTeamsArray;
};
