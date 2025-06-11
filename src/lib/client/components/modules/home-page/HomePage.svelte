<script lang="ts">
  import Header from "./Header.svelte";
  import TeamsSection from "./TeamsSection.svelte";
  import { getHeaderTabState } from "./home-page.svelte";
</script>

<Header />

{#if getHeaderTabState()?.status === "teams"}
  <TeamsSection />
{:else if getHeaderTabState()?.status === "players"}
  <div>Players</div>
{/if}
