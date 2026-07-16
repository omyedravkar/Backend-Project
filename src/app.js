import express from "express" 
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express() 
app.use(cors())
//has more option for setting orgin then number etc check documentation


app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true , limit:"16kb"}))
//to recieve data from url they are different due to different encoder 

app.use(express.static("pubic"))
app.use(cookieParser())

//routes import 


import userRouter from './routes/user.routes.js'

//routes declaration 

app.use("/api/v1/users", userRouter)

export { app }