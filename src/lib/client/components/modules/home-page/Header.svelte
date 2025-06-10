<script lang="ts">
  import landingPageVideo from "$lib/assets/home.mp4";
  import { setHeaderTabState } from "./home-page.svelte";

  const infoForButtons: { buttonText: string; stateValue: "teams" | "players" }[] = [
    { buttonText: "Explore Teams", stateValue: "teams" },
    { buttonText: "Search Players", stateValue: "players" },
  ];
</script>

<section class="relative flex h-svh w-full items-center justify-center">
  <video autoplay loop muted class="absolute top-0 left-0 -z-20 mx-auto h-full w-full object-cover">
    <source src={landingPageVideo} type="video/mp4" />
  </video>
  <div class="absolute top-0 left-0 -z-10 h-full w-full bg-fuchsia-50 opacity-70"></div>
  <div class="mx-auto flex h-full w-[95%] max-w-[1440px] items-center justify-center">
    <div
      class="font-display flex h-1/2 w-full flex-col items-center justify-between bg-transparent font-normal md:flex-row"
    >
      {#each infoForButtons as { buttonText, stateValue }, i (i)}
        <button
          type="button"
          class="hover:from-nfc hover:to-afc cursor-pointer border-4 border-black bg-white px-8 py-8 text-3xl font-normal text-black uppercase hover:bg-linear-to-r hover:text-white"
          onclick={() => setHeaderTabState(stateValue)}
        >
          {buttonText}
        </button>
      {/each}
    </div>
  </div>
</section>
