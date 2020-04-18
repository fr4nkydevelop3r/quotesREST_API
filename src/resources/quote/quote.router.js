import { Router } from 'express';
import { Quote } from './quote.model';
const router = Router()

// /api/quote
router.route('/')
.get(async (req, res) => {
    const quotes = await Quote.find();
    console.log(quotes);
    if(!quotes){
        res.status(400).end();
    }
    res.send({data: quotes});} )
.post(async (req, res) => {
    try {
        const quote = await Quote.create({ author: req.body.author, description: req.body.description, list: req.body.list })
        res.status(201).json({ data: quote })
      } catch (e) {
        console.error(e)
        res.status(400).end()
      }
} )

// /api/quote/:id
router.route('/:id')
.get((req, res) => {
    res.send('Hello from GET /api/quote/:id ')
} )
.put((req, res) => {
    res.send('Hello from PUT /api/quote/:id ')
} )
.delete((req, res) => {
    res.send('Hello from DELETE /api/quote/:id ')
} )

export default router;