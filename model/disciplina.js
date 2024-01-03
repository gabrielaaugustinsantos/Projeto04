module.exports = class disciplina { 
    constructor() {
      this.disciplina = "";
      this.trimestre = "";        /*tipo de período letivo (trimestre/semestre/ano)*/
      this.semestre = "";
      this.ano = "";
      this.periodoletivo = "";  /* identificação do período letivo (1° trimestre 2022) */
      this.nota01 = 0.0;
      this.nota02 = 0.0;
      this.nota03 = 0.0;
      this.nota04 = 0.0;

      this.media = 0.0;
      this.conceito = "";
      this.tipo = "";
      
      
    }
    
 calcularMedia(){
        if(this.trimestre == 'trimestre'){
          var nota01 = parseFloat(this.nota01);
          var nota02 = parseFloat(this.nota02);
        
          var total = ((nota01 + nota02)/2);
          this.media = total.toFixed(2)
          this.tipo = "Trimestre";
        } 
        
        else {
          if(this.semestre == 'semestre'){
            var nota01 = parseFloat(this.nota01);
            var nota02 = parseFloat(this.nota02);
            var nota03 = parseFloat(this.nota03);

            var media = ((nota01 * 0,3) + (nota02 * 0,4) + (nota03 * 0,3))/(0,3 + 0,4 + 0,3);
            this.media = media.toFixed(2);
            this.tipo = "Semestre";
          } 
          
          else{
              if(this.ano == 'ano'){
                var nota01 = parseFloat(this.nota01);
                var nota02 = parseFloat(this.nota02);
                var nota03 = parseFloat(this.nota03);
                var nota04 = parseFloat(this.nota04);

                var media = ((nota01 + nota02 + nota03 + nota04))/4;
                this.media = media.toFixed(2);
                this.tipo = "Ano";
        } 
      }
    }
    if(this.media >= 7){
      this.conceito = "APROVADO";
    } 
    
      else{
          if(this.media >= 5){
            this.conceito = "EM EXAME";
          } 
        
        else{
          this.conceito = "REPROVADO";
      }
    }
  }
}
