// Import the 'express' module
import express from 'express';
import http from 'http';
import { PORT } from "./common/setting";
import baseRouter from './route';

// Create an Express application
const app = express();

const startServer = () => {
  app.use(baseRouter)

  const httpServer = http.createServer(app);

  httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}


startServer();