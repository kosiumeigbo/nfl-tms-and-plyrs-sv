<script lang="ts">
  import { effectFunction } from "./home-page.svelte";
  import {
    getInitialPlayerSearchInputValue,
    setInitialPlayerSearchInputValue,
  } from "@client/components/modules/home-page/home-page.svelte";
  import type { Player } from "$lib/types";
  import type { Attachment } from "svelte/attachments";
  import { getAllTeamsArrayContext, getAllPlayersArrayContext } from "$lib/context";

  const allTeamsArrray = getAllTeamsArrayContext();
  const allPlayersArray = getAllPlayersArrayContext();

  let section: HTMLElement | undefined = undefined;

  $effect(() => effectFunction({ node: section, sectionStatus: "players" }));

  let { isNotDisplayed }: { isNotDisplayed: boolean } = $props();

  let searchInputValue: string = $state("");
  let result: null | Player[] | string = $state(null);

  const myAttachment: Attachment = function () {
    searchInputValue = getInitialPlayerSearchInputValue();
  };

  const getTextColor = function (player: Player): "AFC" | "NFC" | false {
    if (allTeamsArrray.find((team) => team.TeamID === player.TeamID)?.Conference === "AFC") {
      return "AFC";
    }

    if (allTeamsArrray.find((team) => team.TeamID === player.TeamID)?.Conference === "NFC") {
      return "NFC";
    }

    return false;
  };

  const updateResultState = async function () {
    const searchInput = searchInputValue.trim();
    if (!searchInput || searchInput === "") {
      result = "Search input is invalid. Please enter a valid input";
      return;
    }

    const searchedPlayers = allPlayersArray.filter((player) =>
      player.Name.toLowerCase().includes(searchInput.toLowerCase()),
    );

    if (searchedPlayers.length === 0) {
      result = "No players found with that search input value";
      return;
    }

    result = searchedPlayers;
    return;
  };
</script>

<section
  bind:this={section}
  class={{ "hidden": isNotDisplayed, "block": !isNotDisplayed, "font-display min-h-svh py-10": true }}
  {@attach myAttachment}
>
  <div class="custom-container">
    <div class="flex justify-center">
      <form
        onsubmit={(e) => {
          e.preventDefault();
          setInitialPlayerSearchInputValue(searchInputValue);
          updateResultState();
        }}
      >
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
    {#if result === null}
      <p>Click the submit button</p>
    {:else if typeof result === "string"}
      <p>{result}</p>
    {:else}
      {#each result as player (player.PlayerID)}
        <div>
          <a
            href={`/player/${player.PlayerID}`}
            class={{
              "text-stone-300": true,
              "hover:text-afc": getTextColor(player) === "AFC",
              "hover:text-nfc": getTextColor(player) === "NFC",
              "hover:text-stone-400": !getTextColor(player),
            }}
          >
            {player.Name}
          </a>
        </div>
      {/each}
    {/if}
  </div>
</section>
