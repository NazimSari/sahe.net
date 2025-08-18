import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import preRegisterRoutes from "./routes/preRegisterRoutes";

//load all your enviroments
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: ["http://localhost:3000", "https://sahe-net.vercel.app/"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/register", preRegisterRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
