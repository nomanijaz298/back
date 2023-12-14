import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

//config dotenv
dotenv.config();

//database connection config
connectDB();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//port
const PORT = process.env.PORT || 8080;

// listen server
app.listen(PORT, () => {
  console.log(
    `server is running  on ${process.env.DEV_MODE} mode on port ${PORT}`
      .bgMagenta
  );
});
