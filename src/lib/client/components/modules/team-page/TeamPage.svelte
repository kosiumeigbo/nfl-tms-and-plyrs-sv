<script lang="ts">
  import type { Team, Player } from "$lib/types";
  import Header from "@client/components/modules/team-page/Header.svelte";

  let { team, teamPlayers }: { team: Team; teamPlayers: Player[] } = $props();
  console.log(teamPlayers);
</script>

<Header {team} />
