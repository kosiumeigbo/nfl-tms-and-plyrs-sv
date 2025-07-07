<script lang="ts">
  import type { Team, Player } from "$lib/types";
  import Header from "@client/components/modules/team-page/Header.svelte";
  import TeamPlayersSection from "@client/components/modules/team-page/TeamPlayersSection.svelte";

  let { team, teamPlayers }: { team: Team; teamPlayers: Player[] } = $props();
</script>

<Header {team} />
<TeamPlayersSection {teamPlayers} />
