export interface APODApiResponse {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: "image" | "video";
  service_version: string;
  title: string;
  url: string;
}

interface Photo {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
}

export interface MarsRoverPhotosApiResponse {
  photos: Photo[];
}

export interface SolWeather {
  AT: {
    av: string;
    ct: string;
    mn: string;
    mx: string;
  };
  HWS: {
    av: string;
    ct: string;
    mn: string;
    mx: string;
  };
  PRE: {
    av: string;
    ct: string;
    mn: string;
    mx: string;
  };
  WD: Record<
    string,
    {
      compass_degrees: string;
      compass_point: string;
      compass_right: string;
      compass_up: string;
      ct: string;
    }
  >;
  First_UTC: string;
  Last_UTC: string;
  Month_ordinal: string;
  Northern_season: string;
  Season: string;
  Southern_season: string;
}

export interface InSightApiResponse {
  sol_keys: string[];
  validity_checks: Record<string, object> & Partial<Record<string, SolWeather>>;
}
