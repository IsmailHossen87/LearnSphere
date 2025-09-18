import mongoose from "mongoose"
import app from "./app"
import {Server} from "http"
import { envVar } from "./app/config/env"

let server:Server
const startServer = async()=>{
    try {
        await mongoose.connect(envVar.DB_URL)
        console.log("MONGODB CONNECTED")
        server = app.listen(envVar.PORT, () => {
            console.log(`Server is connected${envVar.PORT}`)
        })
    } catch (error) {
        
    }
}

startServer()