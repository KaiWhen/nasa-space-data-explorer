import axios from "axios";
import {
  APODApiResponse,
  InSightApiResponse,
  MarsRoverPhotosApiResponse,
  VoidIndexMarsResponse,
} from "../types/nasa.type.js";

const APOD_BASE_URL = "https://science.nasa.gov/wp-json/wp/v2";
const NASA_API_BASE_URL = "https://api.nasa.gov";
const VOID_INDEX_BASE_URL = "https://api.voidindex.space";

export async function getApod() {
  try {
    const response = await axios.get<APODApiResponse | APODApiResponse[]>(
      `${APOD_BASE_URL}/apod-basic`,
      {
        params: {
          api_key: process.env.NASA_KEY ?? "DEMO_KEY",
        },
      },
    );

    const payload = Array.isArray(response.data)
      ? response.data[0]
      : response.data;

    return payload;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = String(error.response?.status ?? "unknown");
      const details =
        typeof error.response?.data === "string"
          ? error.response.data
          : String(JSON.stringify(error.response?.data ?? {}));

      console.error("Error fetching APOD:", {
        status,
        details,
        url: String(error.config?.url ?? "unknown"),
      });
      throw new Error(`NASA APOD request failed (${status}): ${details}`);
    }

    console.error("Error fetching APOD:", error);
    throw new Error("Failed to fetch APOD data");
  }
}

const nextDay = (date: string): string => {
  const d = new Date(`${date}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
};

export async function getMarsRoverPhotos(
  rover: string,
  earth_date: string,
  camera: string,
  page: number,
) {
  try {
    const normalizedRover = rover.trim()
      ? rover.trim().toLowerCase()
      : "perseverance";
    const validCamera = camera && camera !== "all" ? camera : undefined;
    const normalizedPage = Number.isFinite(page) && page > 0 ? page : 1;

    const response = await axios.get<VoidIndexMarsResponse>(
      `${VOID_INDEX_BASE_URL}/mars/${normalizedRover}`,
      {
        params: {
          ...(validCamera ? { camera: validCamera } : {}),
          ...(earth_date
            ? { date_from: earth_date, date_to: nextDay(earth_date) }
            : {}),
          sort: "date",
          order: "desc",
          page: normalizedPage,
          limit: 25,
        },
      },
    );

    const images = earth_date
      ? response.data.images.filter(
          (image) => image.date?.slice(0, 10) === earth_date,
        )
      : response.data.images;

    const photos = images.map((image) => ({
      id: image.id,
      sol: Number(image.sol ?? 0),
      camera: {
        id: 0,
        name: image.camera ?? "UNKNOWN",
        rover_id: 0,
        full_name: image.camera ?? "UNKNOWN",
      },
      img_src: image.image_url ?? "",
      earth_date: image.date?.slice(0, 10) ?? "",
      rover: {
        id: 0,
        name: response.data.vehicle,
        landing_date: "",
        launch_date: "",
        status: "active",
      },
    }));

    return { photos } as MarsRoverPhotosApiResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const responseData: unknown = error.response?.data;
      const requestParams: unknown = error.config?.params;

      console.error("Error fetching Mars Rover Photos:", {
        status: error.response?.status,
        data: responseData,
        url: error.config?.url,
        params: requestParams,
      });
    } else {
      console.error("Error fetching Mars Rover Photos:", error);
    }
    throw new Error("Failed to fetch Mars Rover Photos data");
  }
}

export async function getInSightData() {
  try {
    const apiKey = String(process.env.NASA_KEY ?? "DEMO_KEY");
    const response = await axios.get<InSightApiResponse>(
      `${NASA_API_BASE_URL}/insight_weather/`,
      {
        params: {
          api_key: apiKey,
          feedtype: "json",
          ver: "1.0",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching InSight data:", error);
    throw new Error("Failed to fetch InSight data");
  }
}
