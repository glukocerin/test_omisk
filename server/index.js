const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use((req, res, next) => {
  // eslint-disable-next-line no-console
  console.log("[http server] %s %s", req.method, req.originalUrl);
  next();
});

app.use("/", express.static(path.resolve(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log("[app] now listening on port %d", PORT);
});
