import express from "express";
import path from "path";
import cors from "cors";
import { Request } from "express-serve-static-core";
import apodRouter from "./routes/apod.route.js";

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT ?? "9001";

app.use(cors<Request>());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("/{*any}", (_, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.use("/apod", apodRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
