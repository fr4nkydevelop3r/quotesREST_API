import { Router } from 'express';
import {ListQuotes} from './listQuotes.model';
import {Quote} from '../quote/quote.model';

const router = Router()

// /api/list-quotes/
router.route('/')
.get(async (req, res) => {
    const list = await ListQuotes.find();
    console.log(list);
    if(!list){
        res.status(400).end();
    }
    res.send({list: list});
} )
.post(async (req, res) => {
    try {
        const doc = await ListQuotes.create({ name: req.body.name })
        res.status(201).json({ data: doc })
      } catch (e) {
        console.error(e)
        res.status(400).end()
      }
    
} )

// /api/list-quotes/:id
router.route('/:id')
.get(async(req, res) => {
    const quotes = await Quote.find({list:req.params.id});
    console.log(quotes);
    if(!quotes){
        res.status(400).end();
    }
    res.send({data: quotes});} )
.put((req, res) => {
    res.send('Hello from PUT /api/list-quotes/:id ')
} )
.delete((req, res) => {
    res.send('Hello from DELETE /api/list-quotes/:id ')
} )

export default router;