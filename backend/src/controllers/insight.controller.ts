import { Request, Response } from "express-serve-static-core";
import { getInSightData } from "../services/nasa.service.js";
import { InSightResponse } from "../types/response.type.js";
import { formatInsightData } from "../utils/helpers/formatInsight.js";

export async function getInSightController(
  req: Request,
  res: Response<InSightResponse>,
): Promise<any> {
  try {
    const data = await getInSightData();
    const formattedData = formatInsightData(data);
    return res.status(200).json({
      success: true,
      data: formattedData,
    });
  } catch (error) {
    console.error("InSight Controller: Error fetching InSight data:", error);
    return res.status(500).json({
      success: false,
      error: "InSight Controller: Failed to fetch InSight data",
    });
  }
}
