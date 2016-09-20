var express = require('express');
var router = express.Router();
var neo4j = require('neo4j');
var neoUser = 'neo4j';
var neoPw = 'admin';
var neoHost = 'localhost';
var neoPort = '7474';
var neoUrl = `http://${neoUser}:${neoPw}@${neoHost}:${neoPort}`;
var db = new neo4j.GraphDatabase(neoUrl);

/* Post query and return neo4j results. */
router.post('/query', function (req, res, next) {
    // Cypherquery
    var query = req.body.query;
    db.cypher({
        query: query,
        params: {}
    }, function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});

router.get('/', function (req, res, next) {
    // Cypherquery
    res.redirect('/TestLinkurious.html');
});

module.exports = router;
