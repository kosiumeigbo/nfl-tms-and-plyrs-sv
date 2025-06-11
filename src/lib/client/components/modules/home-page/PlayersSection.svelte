<script lang="ts">
  import { effectFunction } from "./home-page.svelte";

  let section: HTMLElement | undefined = undefined;

  $effect(() => effectFunction({ node: section, sectionStatus: "players" }));

  let { isNotDisplayed }: { isNotDisplayed: boolean } = $props();
</script>

<section bind:this={section} class={{ "hidden": isNotDisplayed, "block": !isNotDisplayed }}>
  <hr />
  Players
</section>
