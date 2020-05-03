const express = require("express") 
const nunjucks = require("nunjucks") 
const routes = require("./routes")
const methodOverride = require("method-override")

const server = express() //criando servidor ---- chamdno função express para dentro do servidor


server.use(express.urlencoded({extended: true }))
server.use(express.static("public"))
server.use(methodOverride("_method"))
server.use(routes)


server.set("view engine", "njk") // configurando minha template engine

nunjucks.configure("views", {
   express: server,
   autoescape: false,
   noCache: true
})



server.listen(5000, function () {
   console.log("server");
})