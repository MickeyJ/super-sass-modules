var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', 
    {
      title: 'Rows & Boxes',
      description: `Home description`
    }
  );
});

router.get('/contact', function(req, res){
  res.render('contact', 
    {
      title: "Buttons",
      description: `Contact description`
    }
  );
});

module.exports = router;
