config=require('../config');
script=config.get['script']
exports.index = function(req,res){
if(req.params.id){
var index=req.params.id;}
else {
var index='index';
} 
var Maintext = require('../models/maintext').maintext;

Maintext.findOne({'url':index}, function(err, text){
if (!text){
text = {
name: 'Добро пожаловать на сайт',
body:'Извините, страница не найдена'
}
}

res.render('index',{text:text
});
});
};
exports.add = function(req,res){
var Maintext = require('../models/maintext').maintext;
var maintext = new Maintext ({
name: 'История',
body: 'Текст для истории',
url: 'history',
});
maintext.save(function(err, user, affected){
console.log('Ok');
res.redirect('/');
});
}