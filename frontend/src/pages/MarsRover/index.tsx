import React, { useState } from "react";
import Gallery from "../../components/ui/Gallery";
import useFetch from "../../hooks/useFetch";
import type { Photo } from "../../types/roverPhoto";
import StarfieldBackground from "../../components/animations/StarfieldBackground";
import Navbar from "../../components/ui/Navbar";

const MarsRoverPage: React.FC = () => {
  const [rover, setRover] = useState<string>("curiosity");
  const [camera, setCamera] = useState<string>("all");
  const [date, setDate] = useState<string>("2012-08-06");
  const [page, setPage] = useState<string>("1");

  const { data, error, loading, refetch } = useFetch<Photo[]>(
    `/rover?rover=${rover}${camera !== "all" ? `&camera=${camera}` : ""}&earth_date=${date}&page=${page}`,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  const cameras = {
    curiosity: ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"],
    opportunity: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
    spirit: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
    perseverance: [
      "EDL_RUCAM",
      "EDL_RDCAM",
      "EDL_DDCAM",
      "EDL_PUCAM1",
      "EDL_PUCAM2",
      "NAVCAM_LEFT",
      "NAVCAM_RIGHT",
      "MCZ_LEFT",
      "MCZ_RIGHT",
      "FRONT_HAZCAM_LEFT",
      "FRONT_HAZCAM_RIGHT",
      "REAR_HAZCAM_LEFT",
      "REAR_HAZCAM_RIGHT",
    ],
  };

  return (
    <div className="relative">
      <StarfieldBackground />
      <Navbar initialScrollState={true} />

      <div className="z-10 relative min-h-screen">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-secondary">
              Mars Rover Photos
            </h1>

            {/* Search */}
            <div className="bg-primary p-6 rounded-lg mb-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Rover Select */}
                  <div>
                    <label htmlFor="rover">Rover</label>
                    <select
                      id="rover"
                      value={rover}
                      onChange={(e) => {
                        setRover(e.target.value);
                      }}
                    >
                      <option className="text-zinc-500" value="curiosity">
                        Curiosity
                      </option>
                      <option value="opportunity">Opportunity</option>
                      <option value="spirit">Spirit</option>
                      <option value="perseverance">Perseverance</option>
                    </select>
                  </div>

                  {/* Camera Select */}
                  <div>
                    <label htmlFor="camera">Camera</label>
                    <select
                      id="camera"
                      value={camera}
                      onChange={(e) => {
                        setCamera(e.target.value);
                      }}
                    >
                      <option value="all">All Cameras</option>
                      {cameras[rover as keyof typeof cameras]?.map((cam) => (
                        <option key={cam} value={cam}>
                          {cam}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date Select */}
                  <div>
                    <label htmlFor="date">Date</label>
                    <input
                      type="date"
                      id="date"
                      min={
                        rover === "curiosity"
                          ? "2012-08-06"
                          : rover === "opportunity"
                            ? "2004-01-24"
                            : rover === "spirit"
                              ? "2004-01-03"
                              : rover === "perseverance"
                                ? "2021-02-18"
                                : "2012-08-06"
                      }
                      max={
                        rover === "spirit"
                          ? "2011-05-01"
                          : rover === "opportunity"
                            ? "2018-06-10"
                            : new Date().toISOString().split("T")[0]
                      }
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                    />
                  </div>

                  {/* Page */}
                  <div>
                    <label htmlFor="page">Page</label>
                    <input
                      type="number"
                      id="page"
                      min="1"
                      value={page}
                      onChange={(e) => {
                        setPage(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-accent text-white rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                    disabled={loading}
                  >
                    {loading ? "Searching..." : "Search Photos"}
                  </button>
                </div>
              </form>
            </div>

            {/* Gallery */}
            <div>
              {(error ?? data?.length === 0) && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error !== null ? `Error: ${error}` : "No photos found."}
                </div>
              )}

              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
                </div>
              ) : (
                <Gallery photos={data ?? []} />
              )}
            </div>
          </div>
        </div>
        S N
      </div>
    </div>
  );
};

export default MarsRoverPage;
