import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.get("/", (req, res) => {
  res.send("Hello from Node API Server 🚀");
});
app.use("/api/products", productRoutes);

// DB + Server
const PORT = process.env.PORT || 3000;
connectDB();

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
