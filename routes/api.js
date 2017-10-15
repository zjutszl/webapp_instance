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
  let postPageSchema = mongoose.Schema({
    title: String,
    content:String
  });
  let postPage =mongoose.model('postPage',postPageSchema)
  let newpost = new postPage({
    title : req.body.title,
    content : req.body.content
  })
  newpost.save(function (err, newpost) {
    if (err) return console.error(err);
  });
  newpost.find(function(err,newposts){
    if (err) return console.error(err);
    res.send(newposts);
  })
})

module.exports = router;
