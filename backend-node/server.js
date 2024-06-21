const express = require("express")
require("dotenv").config()
const cors = require("cors")
const Mongo_connection = require("./database/dbConnection")
const CookieParser = require("cookie-parser")

const coRoutes = require("./routes/coAuthRoutes")
const cfpRoutes = require("./routes/cfpRoutes")
const ecRoutes = require("./routes/ecRoutes")
const rRoutes = require("./routes/reviewerRoutes")
const resRoutes = require("./routes/researcherRoutes")

const app = express()

const corsOptions = {
    origin: 'http://127.0.0.1:3000',//(https://your-client-app.com)
  };
 
  app.use(cors(corsOptions));

app.use(express.json())
app.use(CookieParser())

const port = process.env.PORT

app.use("/api", coRoutes)
app.use("/api", cfpRoutes)
app.use("/api", ecRoutes)
app.use("/api", rRoutes)
app.use("/api", resRoutes)

app.listen(port, () => { 
    Mongo_connection()  
    console.log(`server is running on port ${port}`)
})