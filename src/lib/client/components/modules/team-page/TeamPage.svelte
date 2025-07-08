<script lang="ts">
  import type { Team, Player } from "$lib/types";
  import Header from "@client/components/modules/team-page/Header.svelte";
  import TeamPlayersSection from "@client/components/modules/team-page/TeamPlayersSection.svelte";
  import TeamInfoSection from "@client/components/modules/team-page/TeamInfoSection.svelte";

  let { team, teamPlayers }: { team: Team; teamPlayers: Player[] } = $props();
  console.log(team);
</script>

<Header {team} />
<TeamInfoSection {team} />
<TeamPlayersSection {teamPlayers} />
