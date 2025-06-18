import type { Team } from "$lib/types";
type HeaderTabStatus = "teams" | "players";
type HeaderTabState = null | HeaderTabStatus;

let headerTabState: HeaderTabState = $state(null);
let buttonPressedCount: number = $state(0);

export const getHeaderTabState = function () {
  return headerTabState;
};

export const setHeaderTabState = function (newStatus: HeaderTabStatus) {
  headerTabState = newStatus;
  console.log($state.snapshot(headerTabState));
  return headerTabState;
};

export const getButtonPressedCount = function () {
  return buttonPressedCount;
};

export const setButtonPressedCount = function () {
  const currentCount = getButtonPressedCount();
  buttonPressedCount = currentCount + 1;
  return buttonPressedCount;
};

export const effectFunction = function ({
  node,
  sectionStatus,
}: {
  node: HTMLElement | undefined;
  sectionStatus: HeaderTabStatus;
}) {
  getButtonPressedCount().toString(); // to make sure this effect runs when button clicked

  const currentHeaderTabState = getHeaderTabState();
  if (!node) return; // not yet mounted
  if (currentHeaderTabState === null) return;

  if (currentHeaderTabState === sectionStatus) {
    node?.scrollIntoView({ behavior: "smooth" });
  }
};

export const getConferences = function (teamsArray: Team[]) {
  return Array.from(new Set(teamsArray.map((team) => team.Conference)).values());
};

export const getDivisions = function (teamsArray: Team[]) {
  return Array.from(new Set(teamsArray.map((team) => team.Division)).values());
};

export const getDivisionTeams = function (conference: string, division: string, teamsArray: Team[]) {
  return teamsArray.filter((team) => team.Conference === conference && team.Division === division);
};
