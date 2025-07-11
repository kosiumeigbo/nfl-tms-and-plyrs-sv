<script lang="ts">
  import Header from "./Header.svelte";
  import TeamsSection from "./TeamsSection.svelte";
  import PlayersSection from "./PlayersSection.svelte";
  import { getHeaderTabState } from "./home-page.svelte";
  import { getAllPlayersArrayContext, getAllTeamsArrayContext } from "$lib/context";
</script>

<Header />
{#if getAllPlayersArrayContext().length === 0 || getAllTeamsArrayContext().length === 0}
  <p>Error!!!</p>
{:else}
  <TeamsSection isNotDisplayed={getHeaderTabState() === null || getHeaderTabState() !== "teams"} />
  <PlayersSection isNotDisplayed={getHeaderTabState() === null || getHeaderTabState() !== "players"} />
{/if}
