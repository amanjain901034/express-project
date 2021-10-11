var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET user info from codeforces */
router.get('/userInfo', async function(req, res, next) {
  try {
    let userHandle = req.query.userHandle;
    let result = await axios.get('https://codeforces.com/api/user.info', {params: {handles: userHandle}});
    return res.json(result.data);
  } catch (e) {
    return next(e);
  }
});

/* GET user rating changes from codeforces */
router.get('/userRating', async function(req, res, next) {
  try {
    let userHandle = req.query.userHandle;
    let result = await axios.get('https://codeforces.com/api/user.rating', {params: {handle: userHandle}});
    return res.json(result.data);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;