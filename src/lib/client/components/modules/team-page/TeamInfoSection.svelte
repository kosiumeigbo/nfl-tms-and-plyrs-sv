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
    <h1 class="mb-6 text-center text-3xl md:text-4xl lg:text-5xl">Coaching Staff and Play Schemes</h1>
    <div class="xs:grid-cols-2 grid grid-cols-1 gap-y-5 md:grid-cols-3">
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">Head Coach</p>
        <p class="text-base md:text-lg lg:text-xl">{team.HeadCoach}</p>
      </div>
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">Offensive Coordinator</p>
        <p class="text-base md:text-lg lg:text-xl">{team.OffensiveCoordinator}</p>
      </div>
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">Defensive Coordinator</p>
        <p class="text-base md:text-lg lg:text-xl">{team.DefensiveCoordinator}</p>
      </div>
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">Special Teams Coach</p>
        <p class="text-base md:text-lg lg:text-xl">{team.SpecialTeamsCoach}</p>
      </div>
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">Defensive Scheme</p>
        <p class="text-base md:text-lg lg:text-xl">{team.DefensiveScheme}</p>
      </div>
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">Offensive Scheme</p>
        <p class="text-base md:text-lg lg:text-xl">{team.OffensiveScheme}</p>
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
    <div class="xs:grid-cols-2 grid grid-cols-1 gap-y-5 md:grid-cols-3">
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">Name</p>
        <p class="text-base md:text-lg lg:text-xl">{StadiumDetails.Name}</p>
      </div>
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">Capacity</p>
        <p class="text-base md:text-lg lg:text-xl">{StadiumDetails.Capacity}</p>
      </div>
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">City</p>
        <p class="text-base md:text-lg lg:text-xl">{StadiumDetails.City}</p>
      </div>
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">State</p>
        <p class="text-base md:text-lg lg:text-xl">{@render getRegionStateText()}</p>
      </div>
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">Playing Surface</p>
        <p class="text-base md:text-lg lg:text-xl">{StadiumDetails.PlayingSurface}</p>
      </div>
      <div class="xs:block flex flex-col items-center justify-center">
        <p class="text-lg uppercase md:text-xl lg:text-2xl">Current Weather Details</p>
        <p class="text-base md:text-lg lg:text-xl">{@render getCurrentWeatherDetailsText()}</p>
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
