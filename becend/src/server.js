import express from 'express';
import { PORT } from './utils/config.js'
import modules from './modules/index.js'
import cors from 'cors'

const app = express();



app.use(express.json())
app.use(cors())
app.use(modules)



app.listen(PORT, () => console.log(`server url http://localhost:${PORT}`))