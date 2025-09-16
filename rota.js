import express from 'express'
import path from 'path'
import Crud from './app.js'

const rota = express()
const port = 3000

rota.get('/cadastrar', (req,res) => {
     const ds = new Crud()
     let nome = document.querySelector("#nome").value
     let idade = document.querySelector("idade").value
     
     ds.inserir(nome,idade)
})