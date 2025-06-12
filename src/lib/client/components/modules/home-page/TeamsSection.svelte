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
  <img src={`/logos/${conference}/main.png`} alt={`${conference} Logo`} />
  {#each divisions as division, i (i)}
    <div class="grid grid-cols-5">
      <div class="text-2xl">{division}</div>
      {#each getDivisionTeams(conference, division, teamsArray) as team, i (i)}
        <div><img src={`/logos/${conference}/${division}/${team.Key}.svg`} alt={`Logo for ${team.FullName}`} /></div>
        <div><img src={team.WikipediaLogoUrl} alt={`Logo for ${team.FullName}`} /></div>
      {/each}
    </div>
  {/each}
{/snippet}

<section bind:this={section} class={{ "hidden": isNotDisplayed, "block": !isNotDisplayed }}>
  {#each conferences as conference, i (i)}
    {@render conferenceTable({ conference })}
  {/each}
</section>
