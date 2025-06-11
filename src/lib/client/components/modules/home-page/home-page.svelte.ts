type HeaderTabStatus = "teams" | "players";
type HeaderTabState = null | HeaderTabStatus;

let headerTabState: HeaderTabState = $state(null);

export const getHeaderTabState = function () {
  return headerTabState;
};

export const setHeaderTabState = function (newStatus: HeaderTabStatus) {
  headerTabState = newStatus;
  console.log($state.snapshot(headerTabState));
  return headerTabState;
};

export const effectFunction = function ({
  node,
  sectionStatus,
}: {
  node: HTMLElement | undefined;
  sectionStatus: HeaderTabStatus;
}) {
  const currentHeaderTabState = getHeaderTabState();
  if (!node) return; // not yet mounted
  if (currentHeaderTabState === null) return;

  if (currentHeaderTabState === sectionStatus) {
    node?.scrollIntoView({ behavior: "smooth" });
  }
};
