import express from "express";
import {
  registerUser,
  deregisterUser,
  registerMetaclix
} from "../controllers/eventRegistration.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// EVENT REGISTRATION
router.post("/register", verifyUser, registerUser)
// router.post("/technova/:id", verifyUser, registerTechnova)
router.post("/metaclix/:id", verifyUser, registerMetaclix)
//DELETE
router.delete("/:id", verifyUser, deregisterUser);

//GET
// router.get("/:id", verifyUser, getMyRegistration);

export default router;
