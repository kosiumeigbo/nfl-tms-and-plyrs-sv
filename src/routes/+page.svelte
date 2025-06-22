<script lang="ts">
  import HomePage from "@client/components/modules/home-page/HomePage.svelte";
  import type { PageProps } from "./$types";
  import { setAllTeamsArrayContext, setInitialPlayerSearchInputValue } from "$lib/context";

  let { data }: PageProps = $props();
  setAllTeamsArrayContext(data.allTeams);
  setInitialPlayerSearchInputValue(data.initialSearchInput);
</script>

<HomePage />
