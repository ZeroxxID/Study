import { Router } from "express"
import * as controller from "../controllers/member.controller"
import { validate } from "../middlewares/validation.middleware"
import { createMemberSchema, updateMemberSchema } from "../schemas/member.schema"

const router = Router()

router.get("/",controller.findAll)
router.get("/:id",controller.findOne)

router.post("/",
    validate(createMemberSchema),
    controller.create)
router.put("/:id",
    validate(updateMemberSchema),
    controller.update)
router.delete("/:id",
    controller.remove)

export default router