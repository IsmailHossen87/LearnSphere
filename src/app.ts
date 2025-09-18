import express from "express"
import { router } from "./app/routes"
import { globalErrorHandler } from "./app/middleware/globalErrorHandlare"
import { notFound } from "./app/middleware/notFound"
import passport from "passport";
import "./app/config/passport"


const app = express()
app.use(express.json())
app.use(passport.initialize());
app.use("/api/v1", router)

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome LearnSphere System Backend"
    })
})

app.use(globalErrorHandler)
app.use(notFound)
export default app;