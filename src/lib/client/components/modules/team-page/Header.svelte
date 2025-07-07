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

<header class="h-20 w-full">
  <div class="grid h-full w-full grid-cols-2">
    <div class="bg-white"></div>
    <div class="grid grid-cols-[1fr_4fr]">
      <div style:background-color={primaryColor}></div>
      <div style:background-color={secondaryColor}></div>
    </div>
  </div>
</header>
