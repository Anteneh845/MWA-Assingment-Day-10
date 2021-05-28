const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

require("./api/configs/database-config");
const jobOpeningRoutes = require("./api/routes/job-opening.route")

app.use(express.json());
app.use("/api", jobOpeningRoutes);

app.use(express.static(path.join(__dirname, "public")));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

app.listen(PORT, () => {
    console.log("App started at " + 3000);
})

