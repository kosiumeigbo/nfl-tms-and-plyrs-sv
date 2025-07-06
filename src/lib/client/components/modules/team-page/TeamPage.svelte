<script lang="ts">
  import type { Team } from "$lib/types";
  let { teamObj }: { teamObj: Team } = $props();
</script>

<section>
  {JSON.stringify(teamObj)}
</section>
