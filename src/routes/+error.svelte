<script lang="ts">
  import { page } from "$app/state";
</script>

<div>Error {page.status}</div>
<div>{page.error?.message}</div>
