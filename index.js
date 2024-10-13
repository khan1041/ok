




const  express=require('express')
const db=require('./Datalocation/db')
const app=express()
const cors=require('cors')
const port=8000
app.use(express.json())
const coursOption={
origin:"http://localhost:5173 ",
method:"GET,POST,PUT,DELETE,PATCH,HEAD   ",
credentials:true,
}

app.set('view engine','ejs')
    app.set('view engine','ejs')
    app.set('views')

  app.use(express.urlencoded({extended:false}))
const path=require('path')
const { render, name } = require('ejs')
const { method } = require('lodash')
app.use(express.urlencoded({extended:false}))

const templete=path.join(__dirname,'views')
//const router=require('./router/auth-router')


app.use(cors(coursOption))
//app.use("/app/auth",router)

app.get('/hell', (req, res) => {
    res.send('Hello World!')
  })


db().then(()=>{

  app.listen(port,()=>{

   console.log(`surver is running at port:${port}`)    

  })

})




