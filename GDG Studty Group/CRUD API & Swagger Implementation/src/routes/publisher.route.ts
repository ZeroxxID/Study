import { Router } from "express"
import * as controller from "../controllers/publisher.controller"
import { validate } from "../middlewares/validation.middleware"
import { publisherSchema } from "../schemas/publisher.schema"

const router = Router()

router.get("/", controller.findAll)
router.post("/", 
    validate(publisherSchema),
    controller.create)
router.put("/:id", 
    validate(publisherSchema),
    controller.update)
router.delete("/:id", 
    controller.remove)

export default router