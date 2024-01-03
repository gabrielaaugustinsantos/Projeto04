const express = require('express');
const app = express();                 

app.use(express.static(__dirname + '/views'));

app.listen(3000, function(){
  console.log("Servidor no ar - Porta: 3000!")
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const boletim = require('./model/boletim');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/home.html')
})

app.post('/processar', function(req, res){
  var bole = new boletim();
    bole.alu.matricula = req.body.matricula;
    bole.alu.nome = req.body.nome;
    bole.alu.curso = req.body.curso;

    bole.disc.disciplina = req.body.disciplina;
    bole.disc.trimestre = req.body.trimestre;
    bole.disc.semestre = req.body.semestre;
    bole.disc.ano = req.body.ano;
    bole.disc.periodoletivo = req.body.periodoletivo;
    bole.disc.nota01 = req.body.nota01;
    bole.disc.nota02 = req.body.nota02;
    bole.disc.nota03 = req.body.nota03;
    bole.disc.nota04 = req.body.nota04;
    bole.disc.media = req.body.media;
    bole.disc.conceito = req.body.conceito;

    bole.disc.calcularMedia();

    res.render('resultado.ejs', {
      matricula: bole.alu.matricula, 
      nome: bole.alu.nome, 
      curso: bole.alu.curso, 

      tipo: bole.disc.tipo,
      periodoletivo: bole.disc.periodoletivo,
      disciplina: bole.disc.disciplina,
      nota01: bole.disc.nota01,
      nota02: bole.disc.nota02,
      nota03: bole.disc.nota03,
      nota04: bole.disc.nota04,
      media: bole.disc.media,
      conceito: bole.disc.conceito,
     
    })
})