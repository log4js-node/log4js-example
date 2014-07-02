var express = require('express');
var router = express.Router();
var log = require('log4js').getLogger("users");

/* GET users listing. */
router.get('/', function(req, res) {
  log.debug("I'm in the users module.");
  res.send('respond with a resource');
});

/* GET something that just errors */
router.get('/broken', function(req, res) {
  log.error("Oh noes, something has gone terribly wrong");
  res.error("aargh");
});

module.exports = router;
