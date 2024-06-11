import express from 'express';
import homeController from '../controller/home.ontroller';

const homePage = express.Router();

homePage
    .get('/', async(req, res) => {
        try {
            const result = await homeController.getHome(req.body);  
            res.status(200).send(result);
        } catch (error: any) {
            res.status(500).send(error?.message?.toString());
        }
    })

export default homePage;