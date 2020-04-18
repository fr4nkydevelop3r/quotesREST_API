import 'dotenv/config';
import { json, urlencoded } from 'body-parser'

import cors from 'cors';
import express from 'express';
import { connect } from './utils/db'
import quoteRouter from './resources/quote/quote.router'
import listQuotesRouter from './resources/listQuotes/listQuotes.router'
const app  = express();

app.use(cors());
app.use(json())
app.use(urlencoded({ extended: true }))



app.use('/api/quote', quoteRouter);
//app.use('/api/list-quotes',listQuotesRouter)

const start = async () => {
    try{
        await connect();
        app.listen(process.env.PORT, () => 
        console.log(`Server listening on port ${process.env.PORT}`)
    )
    } catch(e){
        console.log('Unable to connect to DB')
        console.error(e);
    }
}

start(); 
