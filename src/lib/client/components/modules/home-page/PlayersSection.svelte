<script lang="ts">
  import { effectFunction } from "./home-page.svelte";
  import { getInitialPlayerSearchInputValue } from "$lib/context";

  let section: HTMLElement | undefined = undefined;

  $effect(() => effectFunction({ node: section, sectionStatus: "players" }));

  let { isNotDisplayed }: { isNotDisplayed: boolean } = $props();

  let searchInputValue = $state(getInitialPlayerSearchInputValue());
</script>

<section bind:this={section} class={{ "hidden": isNotDisplayed, "block": !isNotDisplayed, "font-georgia py-10": true }}>
  <div class="custom-container">
    <div class="flex justify-center">
      <form>
        <label class="mb-5 flex flex-col">
          <span class="xs:text-xl mb-1 text-lg md:text-3xl">Enter part or full player name (First or Last):</span>
          <div class="w-full max-w-96">
            <input
              type="text"
              class="w-full border-2 p-2 text-sm outline-none md:text-lg"
              name="search"
              bind:value={searchInputValue}
            />
          </div>
        </label>
        <button
          type="submit"
          class="hover:from-nfc hover:to-afc cursor-pointer rounded-lg border-2 border-black bg-white px-2 py-0.5 text-base uppercase hover:bg-linear-to-r hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</section>
