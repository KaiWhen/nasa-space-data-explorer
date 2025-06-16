import express from "express";
import path from "path";

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT ?? "9001";

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("/{*any}", (_, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
