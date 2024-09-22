import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from "./routers/auth.routes.js";
import messageRouter from "./routers/message.routes.js";
import userRouter from "./routers/user.routes.js";

import connection from "./db/connection.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4001;

app.use(cookieParser());
app.use(express.json());


app.use("/api/auth",authRouter);
app.use("/api/message",messageRouter);
app.use("/api/user",userRouter);


app.listen(port,()=>{
    connection();
    console.log(`Server live at http://localhost:${port}`);
})