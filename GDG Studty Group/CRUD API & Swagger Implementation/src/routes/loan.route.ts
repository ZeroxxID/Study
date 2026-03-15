import { Router } from "express"
import * as controller from "../controllers/loan.controller"
import { validate } from "../middlewares/validation.middleware"
import { createLoanSchema, returnLoanSchema } from "../schemas/loan.schema"

const router = Router()

router.get("/",controller.findAll)
router.get("/:id",controller.findOne)

router.post("/",
    validate(createLoanSchema),
    controller.create)

router.patch("/:id/return",
    validate(returnLoanSchema),
    controller.returnLoan)

router.delete("/:id",
    controller.remove)

export default router