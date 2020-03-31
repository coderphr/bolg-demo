const express = require('express')
const path = require('path')
const app = express()

app.use('/public/', express.static(path.join(__dirname,'./public/')))
app.use('/node_modules/', express.static(path.join(__dirname,'./node_modules/')))

app.engine('html',require('express-art-template'))
app.set('views',path.join(__dirname,'./views/')) //这里默认就是 views文件夹，写出来的目的就是方便修改


app.get('/',(req,res) => {
  res.render('01.html',{
    title:'个人中心'
  })
})

app.listen('3000',() => console.log('Server is reunning') )