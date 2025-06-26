interface APOD {
  title: string;
  copyright: string;
  imageUrl: string;
}

export type APODResponse =
  | { success: true; data: APOD }
  | { success: false; error: string };

export type MarsRoverPhotosResponse =
  | { success: true; data: object[] }
  | { success: false; error: string };

interface WeatherData {
  avData: {
    label: string;
    data: string[];
  };
  mnData: {
    label: string;
    data: string[];
  };
  mxData: {
    label: string;
    data: string[];
  };
}

interface InsightFormatted {
  AT: WeatherData;
  HWS: WeatherData;
  PRE: WeatherData;
  WD: { data: string[] }[];
  dates: { First_UTC: string; Last_UTC: string }[];
}

export type InSightResponse =
  | { success: true; data: InsightFormatted }
  | { success: false; error: string };
