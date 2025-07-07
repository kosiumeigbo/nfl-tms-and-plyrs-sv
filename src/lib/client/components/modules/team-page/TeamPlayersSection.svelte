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
    <h1 class="text-center text-5xl">Team Players</h1>
    {#if teamPlayers.length === 0}
      <p>No players on this team</p>
    {:else}
      {#each teamPlayers as player (player.PlayerID)}
        <div>
          <a
            href={`/player/${player.PlayerID}`}
            class={{
              "text-stone-700": getTextColor(player) === "AFC",
              "text-stone-400": getTextColor(player) === "NFC",
              "hover:text-afc": getTextColor(player) === "AFC",
              "hover:text-nfc": getTextColor(player) === "NFC",
            }}
          >
            {player.Name}
          </a>
        </div>
      {/each}
    {/if}
  </div>
</section>
