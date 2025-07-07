<script lang="ts">
  import type { Team } from "$lib/types";

  let { team }: { team: Team } = $props();

  const getPrimaryColor = function (team: Team) {
    return `#${team.PrimaryColor}`;
  };

  const getSecondaryColor = function (team: Team) {
    return `#${team.SecondaryColor}`;
  };

  const primaryColor = getPrimaryColor(team);
  const secondaryColor = getSecondaryColor(team);
</script>

<header class="relative w-full border-b-2 border-b-black py-10">
  <div class="absolute top-0 left-0 -z-10 grid h-full w-full grid-cols-2">
    <div class="bg-white"></div>
    <div class="grid grid-cols-[1fr_4fr]">
      <div style:background-color={primaryColor}></div>
      <div style:background-color={secondaryColor}></div>
    </div>
  </div>
  <div class="h-full w-full">
    <div class="custom-container">
      <div class="grid w-full grid-cols-2">
        <div class="font-display flex flex-col items-start justify-center">
          <p class="text-4xl">{team.FullName}</p>
          <p class="text-xl">{team.Conference} {team.Division}</p>
        </div>
        <div class="flex items-center justify-center">
          <img src={team.WikipediaLogoUrl} alt={`Logo for ${team.FullName}`} class="h-4/5" />
        </div>
      </div>
    </div>
  </div>
</header>
