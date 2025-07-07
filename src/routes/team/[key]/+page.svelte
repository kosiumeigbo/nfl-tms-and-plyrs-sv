<script lang="ts">
  import type { PageProps } from "./$types";
  import TeamPage from "@client/components/modules/team-page/TeamPage.svelte";
  import { MAIN_TITLE } from "$lib/constants";

  let { data }: PageProps = $props();
  const { teamObj } = data;

  const getPageTitle = function () {
    if (!teamObj) {
      return `${MAIN_TITLE} | Team Page`;
    }
    return `${MAIN_TITLE} | ${teamObj.Key} | ${teamObj.FullName}`;
  };
</script>

<svelte:head>
  <title>{getPageTitle()}</title>
</svelte:head>

<TeamPage {teamObj} />
