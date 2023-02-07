import express from "express";
import memberController from "../controller/memberController.js";
import singleMemberController from "../controller/singleMember.js";
import addMember from "../controller/addMemberController.js";
import updateMember from "../controller/updateMember.js";
import deleteMember from "../controller/deleteMember.js";

const router = express.Router();

router.get("/", memberController);
router.get("/:id", singleMemberController);
router.post("/addmember", addMember);
router.post("/addmember", addMember);
router.put('/updateMember/:id' , updateMember)
router.delete('/deleteMember/:id' , deleteMember)





export default router;
