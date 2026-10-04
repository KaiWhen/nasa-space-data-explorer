import { RequestHandler } from "express";
import { getMarsRoverPhotos } from "../services/nasa.service.js";

export const getMarsRoverPhotosController: RequestHandler = async (
  req,
  res,
) => {
  try {
    const roverParam =
      typeof req.query.rover === "string" ? req.query.rover : "perseverance";
    const earthDateParam =
      typeof req.query.earth_date === "string" ? req.query.earth_date : "";
    const cameraParam =
      typeof req.query.camera === "string" ? req.query.camera : "all";
    const pageParam =
      typeof req.query.page === "string"
        ? Number.parseInt(req.query.page, 10) || 1
        : 1;

    const data = await getMarsRoverPhotos(
      roverParam,
      earthDateParam,
      cameraParam,
      pageParam,
    );

    res.status(200).json({
      success: true,
      data: data.photos,
    });
  } catch (error) {
    console.error(
      "Mars Rover Photos Controller: Error fetching Mars Rover Photos:",
      error,
    );
    res.status(500).json({
      success: false,
      error:
        "Mars Rover Photos Controller: Failed to fetch Mars Rover Photos data",
    });
  }
};
