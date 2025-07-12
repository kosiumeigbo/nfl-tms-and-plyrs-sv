<script lang="ts">
  import type { Player, Team } from "$lib/types";

  let { player, team }: { player: Player; team: Team | undefined } = $props();

  const getPrimaryColor = function (team: Team | undefined) {
    if (!team) return "#000";

    return `#${team?.PrimaryColor}`;
  };

  const getSecondaryColor = function (team: Team | undefined) {
    if (!team) return "#000";

    return `#${team?.SecondaryColor}`;
  };

  const primaryColor = getPrimaryColor(team);
  const secondaryColor = getSecondaryColor(team);
</script>

<header class="w-full">
  <section class="relative h-40 w-full border-b-2 border-b-black py-10 sm:h-56 md:h-72">
    <div class="absolute top-0 left-0 -z-10 grid h-full w-full grid-cols-2">
      <div class="bg-white"></div>
      <div class="grid grid-cols-[1fr_4fr]">
        <div style:background-color={primaryColor}></div>
        <div style:background-color={secondaryColor}></div>
      </div>
    </div>
    <div class="h-full w-full">
      <div class="custom-container">
        <div class="grid h-full w-full grid-cols-2">
          <div class="font-display flex flex-col items-start justify-between">
            <p class="text-2xl sm:text-3xl md:text-4xl">{player.Name}</p>
            <p class="text-base sm:text-lg md:text-xl">{player.Position}</p>
            <p class="text-base sm:text-lg md:text-xl">{player.Height}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</header>
