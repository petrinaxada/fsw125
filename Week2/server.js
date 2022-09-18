const express = require(`express`);
const app = express();
const PORT = 3000;
app.get('/userData', (req, res) => {

    ///res.send is recieving the object
    res.send([{
        name:'jordan',
        location: 'disneyLand'
    },{
        name:'jordan',
        location: 'disneyLand'
    },{
        name:'jordan',
        location: 'disneyLand'
    }])
});
app.get('/snackData', (req, res) => {

    ///res.send is recieving the object
    res.send([{
        name:'chocolate',
        location: 'theStore'
    },{
        name:'hersheys',
        location: 'myHouse'
    },{
        name:'fishNchips',
        location: 'superMarket'
    }])
});
app.get('/hobbieData', (req, res) => {

    ///res.send is recieving the object
    res.send([{
        name:'soccer',
        location: 'soccerField'
    },{
        name:'football',
        location: 'stadium'
    },{
        name:'studies',
        location: 'School'
    }])
});

///server start logic///
app.listen(PORT, () => {
    console.log(`App started on port: ${3000}`)
})
/// finish filling object inform

///start server with 'nodemon server.js to view
///DONT FORGET TO KILL SERVER 
