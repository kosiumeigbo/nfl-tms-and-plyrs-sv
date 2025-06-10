<script lang="ts">
  import type { Attachment } from "svelte/attachments";

  type Conference = "NFC" | "AFC";

  const teamsSectionAttachment: Attachment = function (node) {
    node.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

<section {@attach teamsSectionAttachment}>
  {@render conferenceTable({ conference: "NFC" })}
  <hr />
  {@render conferenceTable({ conference: "AFC" })}
</section>
