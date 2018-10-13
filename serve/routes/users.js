var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
function getListUser() {
  return JSON.parse(fs.readFileSync("./public/user.json", 'utf8')).user;
}

function checkUser(username, password) {
  var result = false;
  var users = getListUser();
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.username == username && user.password == password) {
      return true;
    }
  }
  return false;
}
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
router.post('/login', function (req, res, next) {
  if (checkUser('admin', '123456')) {
    res.status(200);
    res.send(JSON.stringify({
      status: 200,
      data: 'success'
    }));
  } else {
    res.status(400);
    res.send(JSON.stringify({
      status: 400,
      data: 'wrong username or password'
    }));
  }
});
router.get('/users', function (req, res, next) {
  res.status(200);
  res.send(JSON.stringify({
    status: 200,
    data: getListUser()
  }));
});
module.exports = router;