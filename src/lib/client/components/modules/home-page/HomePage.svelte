<script lang="ts">
  import Header from "./Header.svelte";
  import TeamsSection from "./TeamsSection.svelte";
  import PlayersSection from "./PlayersSection.svelte";
  import { getHeaderTabState } from "./home-page.svelte";
  import type { Team } from "@root/src/lib/types";
  let { teamsArray }: { teamsArray: Team[] } = $props();
</script>

<Header />
<TeamsSection isNotDisplayed={getHeaderTabState() === null || getHeaderTabState() !== "teams"} {teamsArray} />
<PlayersSection isNotDisplayed={getHeaderTabState() === null || getHeaderTabState() !== "players"} />
