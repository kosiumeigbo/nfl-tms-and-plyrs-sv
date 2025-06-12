<script lang="ts">
  import HomePage from "@client/components/modules/home-page/HomePage.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<HomePage teamsArray={data.allTeams} />
