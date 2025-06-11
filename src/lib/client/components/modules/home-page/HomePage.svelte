<script lang="ts">
  import Header from "./Header.svelte";
  import TeamsSection from "./TeamsSection.svelte";
  import PlayersSection from "./PlayersSection.svelte";
  import { getHeaderTabState } from "./home-page.svelte";
</script>

<Header />
<TeamsSection isNotDisplayed={getHeaderTabState() === null || getHeaderTabState() !== "teams"} />
<PlayersSection isNotDisplayed={getHeaderTabState() === null || getHeaderTabState() !== "players"} />
