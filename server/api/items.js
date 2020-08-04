const { Router } = require('express');

const Item = require('../models/Item');

const router = Router();


// get all of the entries
router.get('/', async (req, res, next) => {
    try{
        const entries = await Item.find();
        res.json(entries);
    } catch(error) {
        next(error);
    }
});

//add a new entry
router.post('/', async (req, res, next) => {
    try{
        const itemEntry = new Item(req.body);
        const createdItem = await itemEntry.save();
        res.json(createdItem);
    } catch(error) {
        if(error.name === 'ValidationError'){
            res.status(422);
        }
        next(error);
    }
});

//delete an entry
router.delete('/', (req, res, next) => {
    Item.deleteOne(req.body)
        .then(deleted => res.json({
            status: deleted.ok,
            deletedCount: deleted.deletedCount
        }))
        .catch(err => next(err))
    
});

module.exports = router;