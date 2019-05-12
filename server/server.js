const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const galleryRouter = require('./routes/gallery.router')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));
app.use ( express.static( 'server/public' ) );

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/gallery', galleryRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});