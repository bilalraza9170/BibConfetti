const express = require("express");
require("dotenv").config();

const cors = require("cors");
const Mongo_connection = require("./database/dbConnection");
const CookieParser = require("cookie-parser");

const coRoutes = require("./routes/coAuthRoutes");
const cfpRoutes = require("./routes/cfpRoutes");
const ecRoutes = require("./routes/ecRoutes");
const rRoutes = require("./routes/reviewerRoutes");
const resRoutes = require("./routes/researcherRoutes");
const submisionRoutes = require("./routes/submission");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from these origins
    credentials: true, // If using cookies for authentication
    // methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow preflight requests
    // allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(CookieParser());

const port = process.env.PORT;

app.use("/api", coRoutes);
app.use("/api", cfpRoutes);
app.use("/api", ecRoutes);
app.use("/api", rRoutes);
app.use("/api", resRoutes);
app.use("/api", submisionRoutes);

app.listen(port, () => {
  Mongo_connection();
  console.log(`server is running on port ${port}`);
});
