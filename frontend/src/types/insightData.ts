export interface WeatherData {
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

export interface WindData {
  data: string[];
}

export interface InsightData {
  AT: WeatherData;
  HWS: WeatherData;
  PRE: WeatherData;
  WD: WindData[];
  dates: { First_UTC: string; Last_UTC: string }[];
  solKeys: string[];
}
