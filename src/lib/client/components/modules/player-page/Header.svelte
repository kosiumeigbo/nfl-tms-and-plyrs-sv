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
  <section class="relative h-40 w-full border-b-2 border-b-black sm:h-56 md:h-72">
    <div class="absolute top-0 left-0 -z-10 grid h-full w-full grid-cols-2">
      <div class="bg-white"></div>
      <div class="grid grid-cols-[1fr_4fr]">
        <div style:background-color={primaryColor}></div>
        <div style:background-color={secondaryColor}></div>
      </div>
    </div>
    <div class="h-full w-full">
      <div class="custom-container">
        <div class="grid h-full w-full grid-cols-2 grid-rows-1">
          <div class="font-display flex flex-col items-start justify-start pt-10 pl-5">
            <div class="text-lg sm:text-xl md:text-2xl"><span>{player.Name}</span></div>
            <div class="text-sm sm:text-base md:text-lg">
              <div>
                <span>{player.Position}</span>
                &#8226;
                <span>
                  #{#if player.Number}{player.Number}{:else}00{/if}
                </span>
              </div>
              {#if team}
                <div><a href={`/team/${team.Key}`}>{team.FullName}</a></div>
              {/if}
            </div>
            <div class="text-sm text-white uppercase sm:text-base md:text-lg">
              <span
                style:background-color={player.Status.toLowerCase() === "active" ? "#0eb70e" : "#c5350d"}
                class="rounded-lg px-2 py-1"
              >
                {player.Status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</header>
