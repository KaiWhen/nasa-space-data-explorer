import { getMarsRoverPhotos } from "../services/nasa.service.js";
import { Request, Response } from "express-serve-static-core";
import { MarsRoverPhotosResponse } from "../types/response.type.js";

export async function getMarsRoverPhotosController(
  req: Request,
  res: Response<MarsRoverPhotosResponse>,
): Promise<any> {
  try {
    const data = await getMarsRoverPhotos(
      req.query.rover as string,
      req.query.earth_date as string,
      req.query.camera as string,
      parseInt(req.query.page as string, 10) || 1,
    );
    return res.status(200).json({
      success: true,
      data: data.photos,
    });
  } catch (error) {
    console.error(
      "Mars Rover Photos Controller: Error fetching Mars Rover Photos:",
      error,
    );
    return res.status(500).json({
      success: false,
      error:
        "Mars Rover Photos Controller: Failed to fetch Mars Rover Photos data",
    });
  }
}
