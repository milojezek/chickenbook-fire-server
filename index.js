import express from "express";
import cors from "cors";

import config from "./config";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(config.port, () => {
	console.log(`Server running on port ${config.port}`);
});
