import 'dotenv/config';
import { json, urlencoded } from 'body-parser'

import cors from 'cors';
import express from 'express';
const app  = express();

app.use(cors());
app.use(json())
app.use(urlencoded({ extended: true }))


app.use('/', (req, res) => {
    res.send({'data': 'Holis mundo cruel'})
});

app.listen(process.env.PORT, () => 
        console.log(`Server listening on port ${process.env.PORT}`)
    
        )