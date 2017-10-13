var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req,res,next){
    res.render('index',{title:'Express'});
});

/* GET posts page. */
router.get('/posts',function(req,res,next){
    res.render('posts',{title:'post'});
})

/* GET edit page */
router.get('/posts/editor',function(req,res,next){
    res.render('editor',{title:'editor'})
})

module.exports = router;