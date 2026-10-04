import { RequestHandler } from "express";
import { getInSightData } from "../services/nasa.service.js";
import { formatInsightData } from "../utils/helpers/formatInsight.js";

export const getInSightController: RequestHandler = async (_req, res) => {
  try {
    const data = await getInSightData();
    const formattedData = formatInsightData(data);
    res.status(200).json({
      success: true,
      data: formattedData,
    });
  } catch (error) {
    console.error("InSight Controller: Error fetching InSight data:", error);
    res.status(500).json({
      success: false,
      error: "InSight Controller: Failed to fetch InSight data",
    });
  }
};
