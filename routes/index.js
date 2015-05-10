var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

  if(req.query.cardnumber != undefined && req.query.cardnumber != null && req.query.pin != undefined && req.query.pin != null){

  	request.post({url:'https://www.starbucks.com/card/guestbalance', form: {"Card.Number":req.query.cardnumber,"Card.Pin":req.query.pin}}, function(err,httpResponse,body){ 

  		if(body != undefined && body != null){

		  	try{
		  		var fetchBalanceDiv = (body.split('<div id="fetch_balance" class="region size1of3 reset">')[1]).split('</div>')[0];

		  		var cardBalance = (fetchBalanceDiv.split('<h2><span class="fetch_balance_value">')[1]).split('</span>')[0];

		  		var lastUpdated = (fetchBalanceDiv.split('<p>as of <span class="date">')[1]).split('</span>')[0];

		  		console.log(cardBalance + " " + lastUpdated);

		  		var data = 
		  		{
		  			bal:cardBalance,
		  			lastUpdated:lastUpdated
		  		}
		  		res.send(data);

		  	}catch(err){
		  		res.send('could not find card');
		  	};

  		}else{
  			res.send('could not find card');
  		}
  	

  	});

  }else{
  	res.render('index', { title: 'SBUX Card API' });
  }
});

module.exports = router;
