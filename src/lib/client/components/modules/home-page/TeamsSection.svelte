<script lang="ts">
  import { effectFunction } from "./home-page.svelte";
  import type { Team } from "$lib/types";
  import { getConferences, getDivisionTeams, getDivisions } from "$lib/utils";

  let { isNotDisplayed, teamsArray }: { isNotDisplayed: boolean; teamsArray: Team[] } = $props();
  let section: HTMLElement | undefined = undefined;
  $effect(() => effectFunction({ node: section, sectionStatus: "teams" }));

  const conferences = getConferences(teamsArray);
  const divisions = getDivisions(teamsArray);

  console.log(teamsArray);
</script>

{#snippet conferenceTable({ conference }: { conference: string })}
  <div class="mx-auto mb-10 max-w-60">
    <img src={`/logos/${conference}/main.png`} alt={`${conference} Logo`} />
    <p class="font-georgia text-center text-6xl">{conference}</p>
  </div>

  <div class="mb-28">
    {#each divisions as division, i (i)}
      <div
        class="grid grid-cols-1 grid-rows-[7rem_14rem] lg:grid-cols-[8rem_1fr] lg:grid-rows-[7rem] xl:grid-cols-[15rem_1fr] xl:grid-rows-[10rem]"
      >
        <div class="font-display my-auto text-center text-4xl uppercase lg:text-center xl:text-6xl">{division}</div>
        <div class="grid h-full w-full grid-cols-4 grid-rows-1">
          {#each getDivisionTeams(conference, division, teamsArray) as team, i (i)}
            <div class="flex items-center justify-center">
              <a href={`/team/${team.Key}`} class="flex h-full flex-col items-center justify-center">
                <img src={team.WikipediaLogoUrl} alt={`Logo for ${team.FullName}`} class="h-3/5 w-auto" />
                <p class="font-display">{team.FullName}</p>
              </a>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
{/snippet}

<section bind:this={section} class={{ "hidden": isNotDisplayed, "block": !isNotDisplayed, "mt-20": true }}>
  <div class="custom-container">
    {#each conferences as conference, i (i)}
      {@render conferenceTable({ conference })}
    {/each}
  </div>
</section>
