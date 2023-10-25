import express from 'express'
import cors from 'cors'
import taskRoute from './routes/route.js'
import connect from './database/connection.js';
import { fileURLToPath } from 'url';
import path,{ dirname } from 'path';

const app = express();
const port = 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
        exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],
    })
);

app.use(express.json());
app.use('/api', taskRoute);

app.use(express.static(path.join(__dirname, 'uploads')));



connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log('Cannot connect to the Server');
    }
}).catch(error => {
    console.log(error,'Invalid Database connection...!');
})