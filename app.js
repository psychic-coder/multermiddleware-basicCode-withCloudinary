import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import {v2 as cloudinary} from "cloudinary" 
import dotenv from "dotenv";


dotenv.config();


var app = express();

app.use(logger('dev'));
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({ extended: true,limit:"16kb" }));
app.use(cookieParser());
app.use(
    cors({
      credentials: true,
    })
  );


  

  const port = 5000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}  `);
  });

  export default app;
