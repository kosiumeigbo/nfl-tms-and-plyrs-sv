<script lang="ts">
  import HomePage from "@client/components/modules/home-page/HomePage.svelte";
  import type { PageProps } from "./$types";
  //   import { allTeamsArrayData } from "$lib/client/components/modules/home-page/data";

  let { data }: PageProps = $props();
</script>

<!-- <HomePage teamsArray={allTeamsArrayData} /> -->
<HomePage teamsArray={data.allTeams} />
