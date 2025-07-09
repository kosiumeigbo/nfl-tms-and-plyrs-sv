<script lang="ts">
  import type { Team, WeatherAPIGoodResponse } from "$lib/types";
  import { getStadiumWeatherData } from "./utils";

  type StadiumWeatherPromiseState = Promise<WeatherAPIGoodResponse>;

  let { team }: { team: Team } = $props();
  const { StadiumDetails } = team;
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
    <h1 class="text-center text-5xl">Coaching Staff and Play Schemes</h1>
    <div class="grid grid-cols-3">
      <div>
        <p class="uppercase">Head Coach</p>
        <p>{team.HeadCoach}</p>
      </div>
      <div>
        <p class="uppercase">Offensive Coordinator</p>
        <p>{team.OffensiveCoordinator}</p>
      </div>
      <div>
        <p class="uppercase">Defensive Coordinator</p>
        <p>{team.DefensiveCoordinator}</p>
      </div>
      <div>
        <p class="uppercase">Special Teams Coach</p>
        <p>{team.SpecialTeamsCoach}</p>
      </div>
      <div>
        <p class="uppercase">Defensive Scheme</p>
        <p>{team.DefensiveScheme}</p>
      </div>
      <div>
        <p class="uppercase">Offensive Scheme</p>
        <p>{team.OffensiveScheme}</p>
      </div>
    </div>
  </div>
{/snippet}

{#snippet stadiumDetailsSection()}
  <div class="w-full">
    <h1 class="text-center text-5xl">Stadium Details</h1>
    <div class="w-full"><img src={`/stadiums/${team.Key}.jpg`} alt={`Stadium photo for ${team.FullName}`} /></div>
    <div class="grid grid-cols-3">
      <div>
        <p class="uppercase">Name</p>
        <p>{StadiumDetails.Name}</p>
      </div>
      <div>
        <p class="uppercase">Capacity</p>
        <p>{StadiumDetails.Capacity}</p>
      </div>
      <div>
        <p class="uppercase">City</p>
        <p>{StadiumDetails.City}</p>
      </div>
      <div>
        <p class="uppercase">State</p>
        <p>{@render getRegionStateText()}</p>
      </div>
      <div>
        <p class="uppercase">Playing Surface</p>
        <p>{StadiumDetails.PlayingSurface}</p>
      </div>
      <div>
        <p class="uppercase">Current Weather Details</p>
        <p>{@render getCurrentWeatherDetailsText()}</p>
      </div>
    </div>
  </div>
{/snippet}

<section class="w-full">
  <div class="custom-container font-display">
    {@render coachingStaffAndPlaySchemesSection()}
    {@render stadiumDetailsSection()}
  </div>
</section>
