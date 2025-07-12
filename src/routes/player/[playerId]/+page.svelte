<script lang="ts">
  import type { PageProps } from "./$types";
  import { MAIN_TITLE } from "$lib/constants";
  import Header from "$lib/client/components/modules/player-page/Header.svelte";

  let { data }: PageProps = $props();
  const { player, team } = data;
  console.log(player);
  console.log(team);
</script>

<svelte:head>
  <title>{`${MAIN_TITLE} | ${player.Name}`}</title>
</svelte:head>

<Header {player} {team} />
