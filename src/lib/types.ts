export type Team = {
  Key: string;
  TeamID: number;
  PlayerID: number;
  City: string;
  Name: string;
  Conference: string;
  Division: string;
  FullName: string;
  StadiumID: number;
  ByeWeek: number;
  AverageDraftPosition: number;
  AverageDraftPositionPPR: number;
  HeadCoach: string;
  OffensiveCoordinator: string;
  DefensiveCoordinator: string;
  SpecialTeamsCoach: string;
  OffensiveScheme: string;
  DefensiveScheme: string;
  UpcomingSalary: number;
  UpcomingOpponent: string;
  UpcomingOpponentRank: number;
  UpcomingOpponentPositionRank: number;
  UpcomingFanDuelSalary: number;
  UpcomingDraftKingsSalary: number;
  UpcomingYahooSalary: number;
  PrimaryColor: string;
  SecondaryColor: string;
  TertiaryColor: string;
  QuaternaryColor: string;
  WikipediaLogoUrl: string;
  WikipediaWordMarkUrl: string;
  GlobalTeamID: number;
  DraftKingsName: string;
  DraftKingsPlayerID: number;
  FanDuelName: string;
  FanDuelPlayerID: number;
  FantasyDraftName: string;
  FantasyDraftPlayerID: number;
  YahooName: string;
  YahooPlayerID: number;
  AverageDraftPosition2QB: number;
  AverageDraftPositionDynasty: number;
  StadiumDetails: StadiumDetails;
};

export type StadiumDetails = {
  StadiumID: number;
  Name: string;
  City: string;
  State: string;
  Country: string;
  Capacity: number;
  PlayingSurface: string;
  GeoLat: number;
  GeoLong: number;
  Type: string;
};

export type Player = {
  PlayerID: number;
  Team: string | null;
  Number: number | null;
  FirstName: string;
  LastName: string;
  Position: string;
  Status: string;
  Height: string;
  Weight: number;
  BirthDate: string;
  College: string;
  Experience: number;
  FantasyPosition: string;
  Active: boolean;
  PositionCategory: string;
  Name: string;
  Age: number;
  ShortName: string;
  HeightFeet: number;
  HeightInches: number;
  TeamID: number | null;
  GlobalTeamID: number;
  UsaTodayPlayerID: number;
  UsaTodayHeadshotUrl: string;
  UsaTodayHeadshotNoBackgroundUrl: string;
  UsaTodayHeadshotUpdated: string;
  UsaTodayHeadshotNoBackgroundUpdated: string;
};

export type APIResponse<T = NonNullable<unknown>> =
  | { success: true; data: T }
  | { success: false; error: string; status: number };

export type WeatherAPIGoodResponse = {
  location: Location;
  current: Current;
};

export type WeatherAPIBadResponse = {
  error: { code: number; message: string };
};

export type Location = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

export type Current = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
};

export type Condition = {
  text: string;
  icon: string;
  code: number;
};
