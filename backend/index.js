const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connection } = require("./config/config");
const { AllRoutes } = require("./routes/AllRoutes");

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000", "https://www.upskillnexus.com"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", AllRoutes);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(process.env.port, "Mongo db connected successfully");
  } catch (err) {
    console.log(err);
  }
});
