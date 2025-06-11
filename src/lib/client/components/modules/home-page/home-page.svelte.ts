type HeaderTabStatus = { status: "teams"; buttonPressed: number } | { status: "players"; buttonPressed: number };
type HeaderTabState = null | HeaderTabStatus;

let headerTabState: HeaderTabState = $state(null);

export const getHeaderTabState = function () {
  return headerTabState;
};

export const setHeaderTabState = function (newStatus: HeaderTabStatus["status"]) {
  const currentHeaderTabState = getHeaderTabState();
  if (currentHeaderTabState === null) {
    headerTabState = { status: newStatus, buttonPressed: 1 };
  } else {
    if (currentHeaderTabState.status === newStatus) {
      headerTabState = { status: newStatus, buttonPressed: currentHeaderTabState.buttonPressed + 1 };
    } else {
      headerTabState = { status: newStatus, buttonPressed: 1 };
    }
  }

  console.log($state.snapshot(headerTabState));
  return headerTabState;
};

export const effectFunction = function ({
  node,
  sectionStatus,
}: {
  node: HTMLElement | undefined;
  sectionStatus: HeaderTabStatus["status"];
}) {
  const currentHeaderTabState = getHeaderTabState();
  if (!node) return; // not yet mounted
  if (currentHeaderTabState === null) return;

  let timeoutId: NodeJS.Timeout;

  if (currentHeaderTabState.status === sectionStatus) {
    if (currentHeaderTabState.buttonPressed === 1) {
      timeoutId = setTimeout(() => {
        node?.scrollIntoView({ behavior: "smooth" });
      }, 10);
    } else {
      node?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return () => clearTimeout(timeoutId);
};
