<script lang="ts">
  import Header from "./Header.svelte";
  import TeamsSection from "./TeamsSection.svelte";
  import { getHeaderTabState } from "./home-page.svelte";
</script>

<Header />

<TeamsSection isNotDisplayed={getHeaderTabState() === null || getHeaderTabState() !== "teams"} />
<div class={{ "hidden": getHeaderTabState() === null || getHeaderTabState() !== "players" }}>Players</div>
