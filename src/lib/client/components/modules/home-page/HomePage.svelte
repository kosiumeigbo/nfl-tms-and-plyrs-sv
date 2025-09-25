<script lang="ts">
  import Header from "./Header.svelte";
  import TeamsSection from "./TeamsSection.svelte";
  import PlayersSection from "./PlayersSection.svelte";
  import { getHeaderTabState } from "./home-page.svelte";
  import { getAllPlayersArrayContext, getAllTeamsArrayContext } from "$lib/context";
  const allPlayersArray = getAllPlayersArrayContext();
  const allTeamsArray = getAllTeamsArrayContext();
  const headerTabState = getHeaderTabState();
</script>

<Header />
{#if allPlayersArray.length === 0 || allTeamsArray.length === 0}
  <p>Error!!!</p>
{:else}
  <TeamsSection isNotDisplayed={headerTabState === null || headerTabState !== "teams"} />
  <PlayersSection isNotDisplayed={headerTabState === null || headerTabState !== "players"} />
{/if}
