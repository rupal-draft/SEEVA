import express from "express";
import {
  patientRegister,
  login,
  addNewAdmin,
  getAllDoctors,
  logoutAdmin,
  logoutPatient,
  addNewDoctor,
  forgotPassword,
  resetPassword
} from "../controller/user.js";
import {
  isAdminAuthenticated,
  isUserAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:id/:token", resetPassword);

router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
router.get("/doctors", isAdminAuthenticated, getAllDoctors);
router.post("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.post("/patient/logout", isUserAuthenticated, logoutPatient);
router.post("/doctor/addNew", addNewDoctor);

export default router;
