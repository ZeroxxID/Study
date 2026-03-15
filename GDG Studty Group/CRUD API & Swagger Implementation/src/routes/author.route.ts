import { Router } from "express"
import * as controller from "../controllers/author.controller"
import { validate } from "../middlewares/validation.middleware"
import { authorSchema } from "../schemas/author.schema"

const router = Router()

router.get("/",controller.findAll)
router.get("/:id",controller.findOne)

router.post("/",
    validate(authorSchema),
    controller.create)
router.put("/:id",
    validate(authorSchema),
    controller.update)
router.delete("/:id",
    controller.remove)

export default router