import { Router } from "express"
import * as controller from "../controllers/book.controller"
import { validate } from "../middlewares/validation.middleware"
import { bookSchema } from "../schemas/book.schema"

const router = Router()

router.get("/",controller.findAll)
router.get("/:id",controller.findOne)

router.post("/",
    validate(bookSchema),
    controller.create)
router.put("/:id",
    validate(bookSchema),
    controller.update)
router.delete("/:id",
    controller.remove)

export default router