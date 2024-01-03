const aluno = require('./aluno');
const disciplina = require('./disciplina');

module.exports = class boletim { 
  constructor() {
	this.periodoletivo = "";

    this.alu = new aluno();
    this.disc = new disciplina();
  }
 
}