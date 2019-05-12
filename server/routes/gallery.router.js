const express = require('express');
const router = express.Router();
const pool = require('./pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/:id', (req, res) => {
        console.log('in SERVER PUT');
        let itemId = req.params.id;
        console.log('ItemId is', itemId);
        let sqlText = `UPDATE "galleryTable" SET "likes" = "likes" +1 WHERE "id" = $1;`;
    pool.query(sqlText, [itemId])
    .then( (result) => {
        res.sendStatus(200);
    }).catch( (error) => {
        console.log('Failed to update gallery item likes', error);
        res.sendStatus(500);
    })
})

router.delete('/:id', (req, res) => {
        console.log('in SERVER DELETE');
        let itemId = req.params.id;
        console.log('ItemId is', itemId);
        let sqlText = `DELETE FROM "galleryTable" WHERE "id" = $1;`;
    pool.query(sqlText, [itemId])
    .then( (result) => {
        res.sendStatus(200);
    }).catch( (error) => {
        console.log('Failed to delete gallery item', error);
        res.sendStatus(500);
    })
})


// GET Route
router.get('/', (req, res) => {
    pool.query('SELECT * FROM "galleryTable" ORDER BY "id" ASC;')
    .then((result) => {
        res.send(result.rows);

    })
    .catch((error) =>{
        console.log(`Error getting all galleryItems!`, error);
        res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
    const newItem = req.body;
    console.log('req body', req.body);
    console.log(newItem.Path);
    
    const sqlText = `INSERT INTO "galleryTable"("path", "title", "description", "likes") VALUES($1, $2, $3, $4);`;

    pool.query(sqlText, [newItem.Path, newItem.Title, newItem.Description, newItem.Likes])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`ERROR in POST`, error);
            res.sendStatus(500);
        });
});



module.exports = router;