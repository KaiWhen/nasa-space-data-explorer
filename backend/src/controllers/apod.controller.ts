import { RequestHandler } from "express";
import { getApod } from "../services/nasa.service.js";

export const getApodController: RequestHandler = async (_req, res) => {
  try {
    const data = await getApod();
    const imageUrl =
      data.media_type === "image"
        ? (data.hdurl ?? data.url ?? "")
        : (data.url ?? data.hdurl ?? "");

    res.status(200).json({
      success: true,
      data: {
        title: data.title ?? "NASA APOD",
        copyright: data.copyright ?? data.credit ?? "NASA",
        imageUrl,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "APOD Controller: Failed to fetch APOD data";

    console.error("APOD Controller: Error fetching APOD:", message);
    res.status(502).json({
      success: false,
      error: message,
    });
  }
};
