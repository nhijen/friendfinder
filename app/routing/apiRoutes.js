// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var path = require("path")
var friends = require("../data/friends")

module.exports = function (app) {
    //(setting route, user request & server response)
    app.get('/api/friends', function(req, res){
    // res.sendFile(path.join(__dirname, "/../data/friends.js"));
    res.json(friends)
    })
}