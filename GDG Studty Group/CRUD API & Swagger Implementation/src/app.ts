import express from "express"

import categoryRoutes from "./routes/category.route"
import publisherRoutes from "./routes/publisher.route"
import authorRoutes from "./routes/author.route"
import bookRoutes from "./routes/book.route"
import loanRoutes from "./routes/loan.route"
import memberRoutes from "./routes/member.route"
import profileRoutes from "./routes/profile.route"

import { swaggerDocs } from "./docs/swagger"
import { errorHandler } from "./middlewares/error.middleware"

const app = express()
app.use(express.json())
swaggerDocs(app)

app.use("/categories", categoryRoutes)
app.use("/publishers", publisherRoutes)
app.use("/authors", authorRoutes)
app.use("/books", bookRoutes)
app.use("/members", memberRoutes)
app.use("/loans", loanRoutes)
app.use("/profiles", profileRoutes)

app.use(errorHandler)

export default app