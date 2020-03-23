let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));

// write the API here

app.listen(port, () => {
    console.log("server is running on port ", port);
});


app.post('/api/data', (req, res) => {

    req.body.query = 'ThisIsTheQuery';
    res.status(200).send(req.body);

});

app.get('/api', (req, res) => {
    if (req){
        res.status(200).json({
            message: "Successfully connected to API!"
        });
    } else {
        res.status(500).json({
            message: "Unable to load server."
        });
    }
});

app.get('/api/data', (req, res) => {
    const data = {
        data: ''
    };
    res.status(200).send(data);
});

//export app for the tests
module.exports = app;
