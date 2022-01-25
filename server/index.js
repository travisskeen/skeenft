require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const {PORT_NUMBER, CONNECTION_STRING}=process.env;
const yakController = require('./controllers/yakController')

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((db) => {
    app.set('db', db);
    console.log('Database Connected!');
})

app.post('/api/yaks', yakController.addYaks);

app.listen(PORT_NUMBER, () => (
    console.log(`listening on port ${PORT_NUMBER}`)
));
