var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.json({userList:['user_one','user_two','user_three']});
});

/* GET posts lists */
router.get('/posts',function(req,res,next){
  res.json({postList:['文章1','文章2','文章3']});
})

/* POST editor message */
router.post('/posts',function(req,res,next){
  var title = req.body.title;
  var content = req.body.content;
  res.send({title,content});
})

module.exports = router;
