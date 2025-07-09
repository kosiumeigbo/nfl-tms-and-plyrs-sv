<script lang="ts">
  import type { Team, WeatherAPIGoodResponse } from "$lib/types";
  import { getStadiumWeatherData } from "./utils";

  type StadiumWeatherPromiseState = Promise<WeatherAPIGoodResponse>;

  let { team }: { team: Team } = $props();
  const { StadiumDetails, ...rest } = team;
  let stadiumWeatherPromise: StadiumWeatherPromiseState = $derived(
    getStadiumWeatherData({ lat: StadiumDetails.GeoLat, long: StadiumDetails.GeoLong }),
  );
</script>

{#snippet getCurrentWeatherDetailsText()}
  {#await stadiumWeatherPromise}
    Loading...
  {:then weatherResponse}
    {`${weatherResponse.current.temp_c}ºC and ${weatherResponse.current.condition.text}`}
  {:catch error}
    {`${(error as Error).message}`}
  {/await}
{/snippet}

{#snippet getRegionStateText()}
  {#await stadiumWeatherPromise}
    Loading...
  {:then weatherResponse}
    {weatherResponse.location.region}
  {:catch error}
    {(error as Error).message}
  {/await}
{/snippet}

{#snippet coachingStaffAndPlaySchemesSection()}
  <div class="w-full">
    {JSON.stringify(rest)}
    <h1 class="text-center text-5xl">Coaching Staff and Play Schemes</h1>
    <div class="grid grid-cols-3">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
{/snippet}

{#snippet stadiumDetailsSection()}
  <div class="w-full"><img src={`/stadiums/${team.Key}.jpg`} alt={`Stadium photo for ${team.FullName}`} /></div>
  {@render getCurrentWeatherDetailsText()}
  {@render getRegionStateText()}
{/snippet}

<section class="w-full">
  <div class="custom-container font-display">
    {@render coachingStaffAndPlaySchemesSection()}
    {@render stadiumDetailsSection()}
  </div>
</section>
