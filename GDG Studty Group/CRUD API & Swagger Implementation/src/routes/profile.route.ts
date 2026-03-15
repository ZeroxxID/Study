import { Router } from "express"
import * as controller from "../controllers/profile.controller"
import { validate } from "../middlewares/validation.middleware"
import { profileSchema, updateProfileSchema } from "../schemas/profile.schema"

const router = Router()

router.get("/",controller.findAll)
router.get("/:id",controller.findOne)

router.post("/",
    validate(profileSchema),
    controller.create)
router.put("/:id",
    validate(updateProfileSchema),
    controller.update)
router.delete("/:id",
    controller.remove)

export default router