<script lang="ts">
  import HomePage from "@client/components/modules/home-page/HomePage.svelte";
  import { MAIN_TITLE } from "$lib/constants";
</script>

<svelte:head>
  <title>{MAIN_TITLE}</title>
</svelte:head>

<HomePage />
