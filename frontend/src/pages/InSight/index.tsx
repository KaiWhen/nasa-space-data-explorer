import React, { useEffect } from "react";
import StarfieldBackground from "../../components/ui/StarfieldBackground";
import LineChart from "../../components/charts/LineChart";
import WindRose from "../../components/charts/WindRose";
import useFetch from "../../hooks/useFetch";
import Radio from "../../components/ui/Radio/Radio";
import type { InsightData } from "../../types/insightData";
import {
  maxStrNumArray,
  minStrNumArray,
} from "../../utils/helpers/minMaxNumStr";
import Navbar from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";

const InSightWeatherPage: React.FC = () => {
  const { data, error, loading } = useFetch<InsightData>("/insight");
  const [currSol, setCurrSol] = React.useState<string | null>(null);

  useEffect(() => {
    if (data?.solKeys && data.solKeys.length > 0 && currSol === null) {
      setCurrSol(data.solKeys[0]);
    }
  }, [data?.solKeys, currSol]);

  const handleSolChange = (newSol: string) => {
    setCurrSol(newSol);
  };

  const emptyData = {
    avData: { label: "", data: [] },
    mnData: { label: "", data: [] },
    mxData: { label: "", data: [] },
  };

  const emptyWindData = {
    data: [],
  };

  return (
    <div className="relative z-0 bg-black">
      <StarfieldBackground />
      <Navbar initialScrollState={true} />

      <div className="z-10 relative min-h-screen w-full flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="p-6">
              {/* Title */}
              <h1 className="flex flex-col sm:flex-row justify-center text-3xl mb-6 text-center text-secondary">
                <p className="text-accent mr-2">InSight: </p> Mars Weather Data
              </h1>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  Error: {error}
                </div>
              )}

              {/* Info box */}
              <div className="flex flex-1 bg-primary p-4 rounded mb-6">
                <div className="flex flex-row justify-between w-full">
                  <div className="flex flex-col">
                    <h2 className="text-xl text-secondary font-semibold md:text-3xl lg:text-4xl">
                      Sol {data?.solKeys[0]} - {data?.solKeys[6]}
                    </h2>
                    <p className="text-zinc-300 text-sm md:text-lg">
                      {data?.dates[0].First_UTC.slice(0, 10)} -{" "}
                      {data?.dates[6].Last_UTC.slice(0, 10)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-center">
                    <p className="text-zinc-300 text-[10px] md:text-[13px]">
                      Min | Max Temp: {minStrNumArray(data?.AT.mnData.data)}°F |{" "}
                      {maxStrNumArray(data?.AT.mxData.data)}°F
                    </p>
                    <p className="text-zinc-300 text-[10px] md:text-[13px]">
                      Min | Max Wind Spd:{" "}
                      {minStrNumArray(data?.HWS.mnData.data)}m/s |{" "}
                      {maxStrNumArray(data?.HWS.mxData.data)}m/s
                    </p>
                    <p className="text-zinc-300 text-[10px] md:text-[13px]">
                      Min | Max Pressure:{" "}
                      {minStrNumArray(data?.PRE.mnData.data)}Pa |{" "}
                      {maxStrNumArray(data?.PRE.mxData.data)}Pa
                    </p>
                    <p className="text-zinc-300 text-[10px] md:text-[13px]"></p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Temperature Line Chart */}
                <div className="bg-primary p-4 rounded shadow">
                  <h2 className="text-xl text-secondary font-semibold mb-4">
                    Atmospheric Temperature (°F)
                  </h2>
                  {loading ? (
                    <div className="flex-1 flex justify-center items-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
                    </div>
                  ) : (
                    <LineChart
                      data={data?.AT ?? emptyData}
                      solKeys={data?.solKeys ?? ["0"]}
                    />
                  )}
                </div>

                {/* Wind Speed Line Chart */}
                <div className="bg-primary p-4 rounded shadow">
                  <h2 className="text-xl text-secondary font-semibold mb-4">
                    Horizontal Wind Speed (m/s)
                  </h2>
                  {loading ? (
                    <div className="flex-1 flex justify-center items-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
                    </div>
                  ) : (
                    <LineChart
                      data={data?.HWS ?? emptyData}
                      solKeys={data?.solKeys ?? ["0"]}
                    />
                  )}
                </div>

                {/* Atmospheric Pressure Line Chart */}
                <div className="bg-primary p-4 rounded shadow">
                  <h2 className="text-xl text-secondary font-semibold mb-4">
                    Atmospheric Pressure (Pa)
                  </h2>
                  {loading ? (
                    <div className="flex-1 flex justify-center items-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
                    </div>
                  ) : (
                    <LineChart
                      data={data?.PRE ?? emptyData}
                      solKeys={data?.solKeys ?? ["0"]}
                    />
                  )}
                </div>

                {/* Wind Rose */}
                <div className="bg-primary p-4 rounded shadow lg:row-span-2">
                  <div className="flex flex-row justify-between">
                    <h2 className="text-xl text-secondary font-semibold mb-4">
                      Wind Direction
                    </h2>
                    <Radio
                      keys={data?.solKeys ?? []}
                      setSol={handleSolChange}
                      selectedSol={currSol}
                    />
                  </div>
                  {loading ? (
                    <div className="flex-1 flex justify-center items-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
                    </div>
                  ) : (
                    currSol && (
                      <WindRose
                        data={data?.WD ?? [emptyWindData]}
                        currSol={currSol}
                        solKeys={data?.solKeys ?? ["0"]}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 text-center text-[12px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default InSightWeatherPage;
