<script lang="ts">
  import type { Player } from "$lib/types";
  import { getAllTeamsArrayContext } from "$lib/context";

  let { teamPlayers }: { teamPlayers: Player[] } = $props();

  const allTeamsArrray = getAllTeamsArrayContext();

  const getTextColor = function (player: Player): "AFC" | "NFC" | false {
    if (allTeamsArrray.find((team) => team.TeamID === player.TeamID)?.Conference === "AFC") {
      return "AFC";
    }

    if (allTeamsArrray.find((team) => team.TeamID === player.TeamID)?.Conference === "NFC") {
      return "NFC";
    }

    return false;
  };
</script>

<section class="font-display mt-10">
  <div class="custom-container">
    <h1 class="mb-6 text-center text-3xl md:text-4xl lg:text-5xl">Roster</h1>
    {#if teamPlayers.length === 0}
      <p>No players on this team</p>
    {:else}
      <div class="xs:grid-cols-2 grid grid-cols-1 gap-y-3 text-center md:grid-cols-3 lg:grid-cols-4">
        {#each teamPlayers as player (player.PlayerID)}
          <div>
            <a
              href={`/player/${player.PlayerID}`}
              class={{
                "text-base text-stone-400 md:text-lg lg:text-xl": true,
                "hover:text-afc": getTextColor(player) === "AFC",
                "hover:text-nfc": getTextColor(player) === "NFC",
              }}
            >
              {player.Name}
            </a>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>
