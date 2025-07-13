<script lang="ts">
  import type { Player } from "$lib/types";

  let { player }: { player: Player } = $props();
</script>

{#snippet playerInfoSection()}
  <div class="mb-20 w-full">
    <h1 class="mb-6 text-center text-3xl md:text-4xl lg:text-5xl">Player Details and Information</h1>
    <div class="xs:grid-cols-2 grid grid-cols-1 gap-y-5 md:grid-cols-3">
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">Age</p>
        <p class="text-base md:text-lg lg:text-xl">{player.Age}</p>
      </div>
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">Date of Birth</p>
        <p class="text-base md:text-lg lg:text-xl">{player.BirthDate}</p>
      </div>
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">College</p>
        <p class="text-base md:text-lg lg:text-xl">{player.College}</p>
      </div>
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">Experience</p>
        <p class="text-base md:text-lg lg:text-xl">{player.Experience}</p>
      </div>
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">Height</p>
        <p class="text-base md:text-lg lg:text-xl">{player.Height}</p>
      </div>
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">Weight</p>
        <p class="text-base md:text-lg lg:text-xl">{player.Weight}</p>
      </div>
    </div>
  </div>
{/snippet}

<section class="my-10 w-full pt-10">
  <div class="custom-container font-display">
    {@render playerInfoSection()}
  </div>
</section>
