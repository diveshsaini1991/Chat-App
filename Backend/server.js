import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from "./routers/auth.routes.js";
import messageRouter from "./routers/message.routes.js";
import userRouter from "./routers/user.routes.js";

import connection from "./db/connection.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const port = process.env.PORT || 4001;

const __dirname = path.resolve();

app.use(cookieParser());
app.use(express.json());

app.get("/ping",(req,res)=>res.end("PONG"))
app.use("/api/auth",authRouter);
app.use("/api/message",messageRouter);
app.use("/api/user",userRouter);

app.use(express.static(path.join(__dirname,"/Frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"Frontend","dist","index.html"));
})

server.listen(port,()=>{
    connection();
    console.log(`Server live at http://localhost:${port}`);
})