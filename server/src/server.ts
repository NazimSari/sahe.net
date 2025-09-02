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
  origin: ["http://localhost:3000", "https://sahe-net.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  // credentials: true, // cookie/token göndereceksen aç
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/register", preRegisterRoutes);

// Health check endpoint backendi uykudan uyandırmak için ping
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
