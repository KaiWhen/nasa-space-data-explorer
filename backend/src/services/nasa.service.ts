import axios from "axios";
import {
  APODApiResponse,
  InSightApiResponse,
  MarsRoverPhotosApiResponse,
} from "../types/nasa.type.js";

const BASE_URL = "https://api.nasa.gov";

export async function getApod() {
  try {
    const response = await axios.get<APODApiResponse>(
      `${BASE_URL}/planetary/apod`,
      {
        params: {
          api_key: process.env.NASA_KEY,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching APOD:", error);
    throw new Error("Failed to fetch APOD data");
  }
}

export async function getMarsRoverPhotos(
  rover: string,
  earth_date: string,
  camera: string,
  page: number,
) {
  try {
    const isCamAll = camera === "all" ? true : false;
    const response = await axios.get<MarsRoverPhotosApiResponse>(
      `
            ${BASE_URL}/mars-photos/api/v1/rovers/${rover}/photos`,
      {
        params: isCamAll
          ? {
              rover,
              earth_date,
              page,
              api_key: process.env.NASA_KEY,
            }
          : {
              rover,
              earth_date,
              camera,
              page,
              api_key: process.env.NASA_KEY,
            },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Mars Rover Photos:", error);
    throw new Error("Failed to fetch Mars Rover Photos data");
  }
}

export async function getInSightData() {
  try {
    const response = await axios.get<InSightApiResponse>(
      `${BASE_URL}/insight_weather/?api_key=${process.env.NASA_KEY}&feedtype=json&ver=1.0`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching InSight data:", error);
    throw new Error("Failed to fetch InSight data");
  }
}
