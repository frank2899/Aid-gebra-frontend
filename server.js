const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

app = express();
app.use(serveStatic(path.join(__dirname, "dist")));

const port = process.env.PORT || 3000;

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
