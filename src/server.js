const express = require('express')
const server = express()
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require ('./pages')

//config nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})


//SERVIDOR configurações 
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true}))
//configurar arquivos estáticos (css,script,imagens)
.use(express.static("public"))
//rotas de aplicação
.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses)

.post("/save-classes", saveClasses)
//start do servidor 
.listen(5500)
