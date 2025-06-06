type HeaderTabState = null | "teams" | "players";

let headerTabState: HeaderTabState = $state(null);

export const getHeaderTabState = function () {
  return headerTabState;
};

export const setHeaderTabState = function (newState: HeaderTabState) {
  headerTabState = newState;
  console.log($state.snapshot(headerTabState));
  return headerTabState;
};
