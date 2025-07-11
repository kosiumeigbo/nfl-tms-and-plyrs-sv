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
  <div class="mb-20 w-full">
    <h1 class="mb-6 text-center text-5xl">Coaching Staff and Play Schemes</h1>
    <div class="grid grid-cols-3 gap-y-5">
      <div>
        <p class="text-2xl uppercase">Head Coach</p>
        <p class="text-xl">{team.HeadCoach}</p>
      </div>
      <div>
        <p class="text-2xl uppercase">Offensive Coordinator</p>
        <p class="text-xl">{team.OffensiveCoordinator}</p>
      </div>
      <div>
        <p class="text-2xl uppercase">Defensive Coordinator</p>
        <p class="text-xl">{team.DefensiveCoordinator}</p>
      </div>
      <div>
        <p class="text-2xl uppercase">Special Teams Coach</p>
        <p class="text-xl">{team.SpecialTeamsCoach}</p>
      </div>
      <div>
        <p class="text-2xl uppercase">Defensive Scheme</p>
        <p class="text-xl">{team.DefensiveScheme}</p>
      </div>
      <div>
        <p class="text-2xl uppercase">Offensive Scheme</p>
        <p class="text-xl">{team.OffensiveScheme}</p>
      </div>
    </div>
  </div>
{/snippet}

{#snippet stadiumDetailsSection()}
  <div class="mb-20 w-full">
    <h1 class="mb-5 text-center text-5xl">Stadium Details</h1>
    <div class="mb-5 flex w-full justify-center">
      <img src={`/stadiums/${team.Key}.jpg`} alt={`Stadium photo for ${team.FullName}`} />
    </div>
    <div class="grid grid-cols-3 gap-y-5">
      <div>
        <p class="text-2xl uppercase">Name</p>
        <p class="text-xl">{StadiumDetails.Name}</p>
      </div>
      <div>
        <p class="text-2xl uppercase">Capacity</p>
        <p class="text-xl">{StadiumDetails.Capacity}</p>
      </div>
      <div>
        <p class="text-2xl uppercase">City</p>
        <p class="text-xl">{StadiumDetails.City}</p>
      </div>
      <div>
        <p class="text-2xl uppercase">State</p>
        <p class="text-xl">{@render getRegionStateText()}</p>
      </div>
      <div>
        <p class="text-2xl uppercase">Playing Surface</p>
        <p class="text-xl">{StadiumDetails.PlayingSurface}</p>
      </div>
      <div>
        <p class="text-2xl uppercase">Current Weather Details</p>
        <p class="text-xl">{@render getCurrentWeatherDetailsText()}</p>
      </div>
    </div>
  </div>
{/snippet}

<section class="my-10 w-full pt-10">
  <div class="custom-container font-display">
    {@render coachingStaffAndPlaySchemesSection()}
    {@render stadiumDetailsSection()}
  </div>
</section>
