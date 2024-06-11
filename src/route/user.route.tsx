import express from 'express';
import userController from '../controller/user.controller';

const userRoute = express.Router();

userRoute
    .get('/', async(req, res) => {
        try {
            const result = await userController.getUser(req.body);  
            res.status(200).send(result);
        } catch (error: any) {
            res.status(500).send(error?.message?.toString());
        }
    })

export default userRoute;