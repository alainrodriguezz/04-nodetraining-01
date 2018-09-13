const express = require('express');
const hbs = require('hbs');
const PORT = process.env.PORT || 3000;
var app = express();

//use public folder
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));


hbs.registerHelper('getCurrentYear',()=>{
	return new Date().getFullYear();
})

hbs.registerHelper('scream',(text,othertext)=>{
	return text.toUpperCase() + ' ' + othertext + '!!!';
})

app.get('/',(req,res)=>{
	res.render('home',{
		title: 	'Home Title'
	})
})

app.get('/about',(req,res)=>{
	res.render('about',{
		title: 	'About Title'
	});
})

app.listen(PORT,()=>{
	console.log('listening');
});