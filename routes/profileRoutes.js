import express from "express";

import {
	createProfile,
	getAllProfiles,
	getProfileById,
	updateProfileById,
	deleteProfileById,
} from "../controllers/profileController.js";

const router = express.Router();

router.post("/profiles", createProfile);

router.get("/profiles", getAllProfiles);
router.get("/profiles/:id", getProfileById);

router.put("/profiles/:id", updateProfileById);

router.delete("/profiles/:id", deleteProfileById);

export default router;
