<script lang="ts">
  import type { Team } from "$lib/types";

  let { team }: { team: Team } = $props();
</script>

{#snippet coachingStaffAndPlaySchemes()}
  <div>{JSON.stringify(team)}</div>
{/snippet}

{@render coachingStaffAndPlaySchemes()}
