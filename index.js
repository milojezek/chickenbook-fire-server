import express from "express";
import cors from "cors";

import config from "./config.js";
import profileRoutes from "./routes/profileRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", profileRoutes);

app.listen(config.port, () => {
	console.log(`Server running on port ${config.port}`);
});
