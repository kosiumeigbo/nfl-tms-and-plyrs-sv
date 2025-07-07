<script lang="ts">
  import type { PageProps } from "./$types";
  import TeamPage from "@client/components/modules/team-page/TeamPage.svelte";
  import { MAIN_TITLE } from "$lib/constants";

  let { data }: PageProps = $props();
  const { team, teamPlayers } = data;

  const getPageTitle = function () {
    if (!team) {
      return `${MAIN_TITLE} | Team Page`;
    }
    return `${MAIN_TITLE} | ${team.Key} | ${team.FullName}`;
  };
</script>

<svelte:head>
  <title>{getPageTitle()}</title>
</svelte:head>

<TeamPage {team} {teamPlayers} />
