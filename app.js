const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const cors = require('cors');
const projectRoutes = require('./routes/project')
const authRoutes = require('./routes/auth')
const bodyParser = require('body-parser');
const connectToMongo = require('./db');

connectToMongo();
app.use(cors());
// this use for rest api post man requests
app.use(express.json());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', express.static(path.join(__dirname, 'public/build')));
app.use('/project', projectRoutes);
app.use(authRoutes);

// add this line at the end of the code
app.use('/', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, './views/404.html'));
});

app.listen(port, () => {
    console.log(`your server is listening on port" http://localhost:${port}`)
})