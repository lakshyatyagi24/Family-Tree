const express=require('express')
const fs=require('fs')
const path=require('path')
const app=express()
app.set('views','./views')
app.set('view engine','pug')
app.use(express.static('public'))
app.get('/', (req,res)=>{
	res.render('index.pug')
})
const familyNames=['ethel','harold','paul','rich']
app.get('/:memberName', (req,res)=>{
	if(familyNames.includes(req.params.memberName))
		res.render('index.pug', {
			memberName: req.params.memberName
		})
	res.sendStatus(404)
})
app.listen(3000)
