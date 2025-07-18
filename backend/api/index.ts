import express from "express";
import cors from "cors";
import { Request } from "express-serve-static-core";
import apodRouter from "../src/routes/apod.route.js";
import roverRouter from "../src/routes/rover.route.js";
import insightRouter from "../src/routes/insight.route.js";

const app = express();
const port = process.env.PORT ?? "9001";

app.use(cors<Request>());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/dist")));
//   app.get("/{*any}", (_, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//   });
// }

app.use("/apod", apodRouter);
app.use("/rover", roverRouter);
app.use("/insight", insightRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
