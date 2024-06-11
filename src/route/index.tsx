import { Router } from "express"
import userRoute from "./user.route";
import homePage from "./home.route";

const baseRouter = Router();

baseRouter.use("/user", userRoute)
baseRouter.use("/home", homePage)

export default baseRouter;