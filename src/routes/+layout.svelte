<script lang="ts">
  import "../app.css";
  import type { LayoutProps } from "./$types";
  import { setAllTeamsArrayContext, setAllPlayersArrayContext } from "$lib/context";

  let { children, data }: LayoutProps = $props();

  setAllTeamsArrayContext(data.allTeams);
  setAllPlayersArrayContext(data.allPlayers);
</script>

{@render children()}
