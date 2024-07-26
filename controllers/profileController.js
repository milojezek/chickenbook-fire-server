import { firebase } from "../firebase.js";
import Profile from "../models/Profile.js";
import {
	getFirestore,
	collection,
	doc,
	addDoc,
	getDoc,
	getDocs,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";

const db = getFirestore(firebase);

export const createProfile = async (req, res) => {
	try {
		const data = req.body;
		await addDoc(collection(db, "profiles"), data);
		res.status(201).send("Profile created successfully");
	} catch (error) {
		res.status(400).send(error.message);
	}
};

export const getAllProfiles = async (req, res) => {
	try {
		const allProfiles = [];
		const querySnapshot = await getDocs(collection(db, "profiles"));
		for (const doc of querySnapshot.docs) {
			const profile = new Profile(
				doc.id,
				doc.data().name,
				doc.data().email,
				doc.data().calling,
				doc.data().imageUrl,
				doc.data().skills,
			);
			allProfiles.push(profile);
		}
		res.status(200).send(allProfiles);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

export const getProfileById = async (req, res) => {
	try {
		const id = req.params.id;
		const profile = await getDoc(doc(db, "profiles", id));
		if (profile.exists()) {
			res.status(200).send(profile.data());
		} else {
			res.status(404).send("Profile not found");
		}
	} catch (error) {
		res.status(400).send(error.message);
	}
};

export const updateProfileById = async (req, res) => {
	try {
		const id = req.params.id;
		const data = req.body;
		const profile = getDoc(doc(db, "profiles", id));
		await updateDoc(profile, data);
		res.status(200).send("Profile updated successfully");
	} catch (error) {
		res.status(400).send(error.message);
	}
};

export const deleteProfileById = async (req, res) => {
	try {
		const id = req.params.id;
		await deleteDoc(doc(db, "profiles", id));
		res.status(200).send("Profile deleted successfully");
	} catch (error) {
		res.status(400).send(error.message);
	}
};
