import { InSightApiResponse } from "../../types/nasa.type.js";
import { SolWeather } from "../../types/nasa.type.js";

export function formatInsightData(data: InSightApiResponse) {
  const keys = Object.keys(data) as (keyof InSightApiResponse)[];
  const AT = {
    avData: {
      label: "Average Temperature",
      data: [] as string[],
    },
    mnData: {
      label: "Minimum Temperature",
      data: [] as string[],
    },
    mxData: {
      label: "Maximum Temperature",
      data: [] as string[],
    },
  };

  const HWS = {
    avData: {
      label: "Average Wind Speed",
      data: [] as string[],
    },
    mnData: {
      label: "Minimum Wind Speed",
      data: [] as string[],
    },
    mxData: {
      label: "Maximum Wind Speed",
      data: [] as string[],
    },
  };

  const PRE = {
    avData: {
      label: "Average Pressure",
      data: [] as string[],
    },
    mnData: {
      label: "Minimum Pressure",
      data: [] as string[],
    },
    mxData: {
      label: "Maximum Pressure",
      data: [] as string[],
    },
  };

  const WD = [] as {
    data: string[];
  }[];

  const dates = [] as {
    First_UTC: string;
    Last_UTC: string;
  }[];

  keys.forEach((key) => {
    const solNumber = Number(key);
    if (solNumber > 0) {
      const solData = data[
        key
      ] as InSightApiResponse[keyof InSightApiResponse] & SolWeather;
      AT.avData.data.push(solData.AT.av);
      AT.mnData.data.push(solData.AT.mn);
      AT.mxData.data.push(solData.AT.mx);
      HWS.avData.data.push(solData.HWS.av);
      HWS.mnData.data.push(solData.HWS.mn);
      HWS.mxData.data.push(solData.HWS.mx);
      PRE.avData.data.push(solData.PRE.av);
      PRE.mnData.data.push(solData.PRE.mn);
      PRE.mxData.data.push(solData.PRE.mx);
      const wdCounts = [] as string[];
      let x = 0;
      Object.keys(solData.WD).forEach((wdKey) => {
        while (wdCounts.length !== 0 && Number(wdKey) - x > 1) {
          wdCounts.push("0");
          x++;
        }
        const wdData = solData.WD[wdKey];
        wdCounts.push(wdData.ct);
        x++;
      });
      WD.push({
        data: wdCounts,
      });
      dates.push({
        First_UTC: solData.First_UTC,
        Last_UTC: solData.Last_UTC,
      });
    }
  });

  return {
    AT: AT,
    HWS: HWS,
    PRE: PRE,
    WD: WD,
    dates: dates,
    solKeys: data.sol_keys,
  };
}
