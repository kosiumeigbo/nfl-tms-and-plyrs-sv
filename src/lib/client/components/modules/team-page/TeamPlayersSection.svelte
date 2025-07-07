<script lang="ts">
  import type { Player } from "$lib/types";

  let { teamPlayers }: { teamPlayers: Player[] } = $props();
  console.log(teamPlayers);
</script>
