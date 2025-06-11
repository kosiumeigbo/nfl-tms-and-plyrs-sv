<script lang="ts">
  import { effectFunction } from "./home-page.svelte";

  type Conference = "NFC" | "AFC";

  let section: HTMLElement | undefined = undefined;

  $effect(() => effectFunction({ node: section, sectionStatus: "teams" }));

  const divisions = ["North", "South", "East", "West"] as const;

  const allTeams = {
    NFC: {
      North: ["CHI", "DET", "GB", "MIN"],
      South: ["ATL", "CAR", "NO", "TB"],
      West: ["ARI", "LAR", "SEA", "SF"],
      East: ["DAL", "NYG", "PHI", "WAS"],
    },
    AFC: {
      North: ["BAL", "CIN", "CLE", "PIT"],
      South: ["HOU", "IND", "JAX", "TEN"],
      West: ["DEN", "KC", "LAC", "LV"],
      East: ["BUF", "MIA", "NE", "NYJ"],
    },
  } as const;

  let { isNotDisplayed }: { isNotDisplayed: boolean } = $props();
</script>

{#snippet conferenceTable({ conference }: { conference: Conference })}
  <img src={`/logos/${conference}/main.png`} alt={`${conference} Logo`} />
  {#each divisions as division, i (i)}
    <div>{division}</div>
    {#each allTeams[conference][division] as team, i (i)}
      <img src={`/logos/${conference}/${division}/${team}.svg`} alt={`Logo for ${team}`} />
    {/each}
  {/each}
{/snippet}

<section bind:this={section} class={{ "hidden": isNotDisplayed, "block": !isNotDisplayed }}>
  {@render conferenceTable({ conference: "NFC" })}
  <hr />
  {@render conferenceTable({ conference: "AFC" })}
</section>
