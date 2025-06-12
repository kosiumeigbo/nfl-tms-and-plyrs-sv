import type { Team } from "./types";

export const getConferences = function (teamsArray: Team[]) {
  return Array.from(new Set(teamsArray.map((team) => team.Conference)).values());
};

export const getDivisions = function (teamsArray: Team[]) {
  return Array.from(new Set(teamsArray.map((team) => team.Division)).values());
};

export const getDivisionTeams = function (conference: string, division: string, teamsArray: Team[]) {
  return teamsArray.filter((team) => team.Conference === conference && team.Division === division);
};
