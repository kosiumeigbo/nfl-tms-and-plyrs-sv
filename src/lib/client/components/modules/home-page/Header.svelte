<script lang="ts">
  import landingPageVideo from "$lib/assets/home.mp4";
  import { setHeaderTabState, setButtonPressedCount } from "./home-page.svelte";

  const infoForButtons: { buttonText: string; statusValue: "teams" | "players" }[] = [
    { buttonText: "Explore Teams", statusValue: "teams" },
    { buttonText: "Search Players", statusValue: "players" },
  ];
</script>

<section class="relative flex h-svh w-full items-center justify-center">
  <video autoplay loop muted class="absolute top-0 left-0 -z-20 mx-auto h-full w-full object-cover">
    <source src={landingPageVideo} type="video/mp4" />
  </video>
  <div class="absolute top-0 left-0 -z-10 h-full w-full bg-fuchsia-50 opacity-70"></div>
  <div class="custom-container">
    <div
      class="font-display flex h-full w-full flex-col items-center justify-between gap-y-6 bg-transparent py-5 font-normal md:flex-row md:justify-between md:gap-y-0"
    >
      {#each infoForButtons as { buttonText, statusValue }, i (i)}
        <button
          type="button"
          class="hover:from-nfc hover:to-afc cursor-pointer border-4 border-black bg-white px-8 py-8 text-3xl font-normal text-black uppercase hover:bg-linear-to-r hover:text-white"
          onclick={() => {
            setButtonPressedCount();
            setHeaderTabState(statusValue);
          }}
        >
          {buttonText}
        </button>
      {/each}
    </div>
  </div>
</section>
