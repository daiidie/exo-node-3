const express = require('express')
const  calculator  = require('./calculator')
const app = express()
const LOCAL_IP = 'localhost' // change local ip here if needed
const PORT = 3333


app.get('/calc/:operator/:nb1/:nb2', (req, res) => {
  
  let result = calculator.calc(req.params.operator, req.params.nb1, req.params.nb2) 
  res.json({
    "op": req.params.operator,
    "op1": req.params.nb1,
    "op2": req.params.nb2,
    "result": result
  })
})


// démarrage de notre serveur sur le port 3000
app.listen(PORT, LOCAL_IP, () => {
  //exécution d'un affichage au lacement du serveur.
  console.log(`Example app listening at http://${LOCAL_IP}:${PORT}`)
})