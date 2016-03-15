var express = require('express');
var router = express.Router()
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

router.get('/testget',function(req,res){
	res.send('get');
	console.log('TestGET');
})
//////////
var test ={name:'thanakorn',sur:'kitsawat'}
/////////
router.post('/testpost',jsonParser,function(req,res){
 var full = {full:req.body.name+' '+req.body.sur}
	res.send(full);
	console.log('TestPOST-OK')
})
////////


module.exports = router