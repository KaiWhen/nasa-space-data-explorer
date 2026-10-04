export interface APODApiResponse {
  copyright?: string;
  credit?: string;
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: "image" | "video";
  service_version?: string;
  title?: string;
  url?: string;
  permalink?: string;
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

export interface VoidIndexImageRecord {
  id: number;
  nasa_id?: number | string;
  title?: string;
  description?: string;
  date?: string;
  image_url?: string;
  camera?: string;
  credit?: string;
  sol?: number;
}

export interface VoidIndexMarsResponse {
  vehicle: string;
  images: VoidIndexImageRecord[];
  pagination: {
    page: number;
    limit: number;
    total_count: number;
    total_pages: number;
    has_next: boolean;
    has_prev: boolean;
  };
  filters: {
    camera: string | null;
    date_from: string | null;
    date_to: string | null;
    order: string;
    sol: number | null;
    sol_max: number | null;
    sol_min: number | null;
    sort_by: string;
  };
  timestamp: string;
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
