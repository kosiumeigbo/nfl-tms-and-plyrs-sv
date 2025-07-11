<script lang="ts">
  import type { PageProps } from "./$types";
  import TeamPage from "@client/components/modules/team-page/TeamPage.svelte";
  import { MAIN_TITLE } from "$lib/constants";

  let { data }: PageProps = $props();
  const { team, teamPlayers } = data;
</script>

<svelte:head>
  <title>{`${MAIN_TITLE} | ${team.Key} | ${team.FullName}`}</title>
</svelte:head>

<TeamPage {team} {teamPlayers} />
