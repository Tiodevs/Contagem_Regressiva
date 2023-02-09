function mostrarHora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

// Montra a data e o horario atual
setInterval(function (){
    const horario = document.getElementById('horario')

    let now = new Date()
    const dia = "0" + now.getDate()
    const mes = now.getMonth() + 1
    const mesComZero = "0" + mes 
    const ano = now.getFullYear()

    horario.innerHTML = "Hoje é dia " + dia+ "/" + mesComZero + "/" + ano + " às " + mostrarHora()


}, 1000)

// Frase padrão antes de começar o setInterval
frase.innerHTML = "No dia do nosso aniversario de 3 anos de namoro vai aparecer um texto aqui s2"


//  Altera a frase a cada 30s
setInterval(function(){
    const frase = document.getElementById('frase')

    let now = new Date()
    const dia = "0" + now.getDate()
    const mes = now.getMonth() + 1
    const mesComZero = "0" + mes 
    const ano = now.getFullYear()

    // Se cehagr no dia dos 3 anos coloca frase de comemoração se não sorteia uma frase aleatoria
    if(dia == "05" && mes == "03" && ano == "2023"){
        frase.innerHTML = "O mundo é tão gigantes que me confunde todo.\n \nO mundo que as vezes se faz cruel, as vezes poético, as vezes  injusto, as vezes lindo, as vezes carnaval, as vezes guerra, as vezes trabalho, as vezes amor.\n\nMetade de um mundo brinca outra metade do mundo faz guerra outra meta é carnaval outra metade é trabalho outra metade é família.\n\nSó eu que acho estranho imaginar que ao mesmo tempo que tem exatamente agora uma pessoa jogando comida no lixo tem outra pessoa passando fome?\n\nDepois de anos percebi que nem tudo se tratava de ter, ter dinheiro, ter comida, ter carro, ter, ter, ter… se ter não é proteção então o que é?\n\nMonique você no meio de toda essa loucura é proteção. Você me conhece de uma maneira que nenhum outro me conheceu, você me acalma quando ninguém mais consegue, você me mostra erros que nem sabiam que existiam em mim, você tem paciência para com os meus defeitos e está comigo nas maiores dificuldades, você genuinamente me admira, você me apoia nas ideia estranhas, você conhece os meus sonhos, você faz parte dos meus sonhos, você é exemplo, você é minha motivação para tentar ser melhor sempre, você é linda e o seu abraço as vezes me leva para outra dimensão, um lugar aonde só existe paz e o mundo não é mais cruel. Sem dúvidas somos completos, mesmo separados. O tempo que estiver na missão vamos crescer muito individualmente, não tenho dúvidas que quando tu volta vou estar de braços abertos te esperando para juntar novamento o meu eu mais completo com você. E não vamos mais ficar só nos sonhos, vamos realizar um a um deles juntos, conhecer o lado cruel e o lado lindo do mundo e no final estaremos bem, porque você Monique é proteção.\n\nCom amor, da sua mulher ❤️"
    }else{
        
    }
}, 30000)


// Contagem regressiva para anive3rsario de 3 anos de namoro
function contagemRegressiva(dataFinal) {
    var intervalId = setInterval(function() {
      var dataAtual = new Date();
      var tempoRestante = Math.floor((((dataFinal - dataAtual) / 1000) / 60 / 60 ) / 24);

      var tempoRestanteHoras = Math.floor(((dataFinal - dataAtual) / 1000) / 60 / 60);

      var tempoRestanteMinutos = Math.floor(((dataFinal - dataAtual) / 1000) / 60 );

      var tempoRestanteSegundos = Math.floor((dataFinal - dataAtual) / 1000 );
      
      if (tempoRestante < 0) {
        console.log("Contagem regressiva completa!");
        clearInterval(intervalId);
      } else {
        const contagemTresAnos = document.getElementById('contagmTresAnos');
        
        if (tempoRestante != "0") {
            contagemTresAnos.innerHTML = "Faltam " + tempoRestante + " dias para nosso aniversario de 3 anos de namoro "
        } if (tempoRestante == "0") {
            contagemTresAnos.innerHTML = "Faltam " + tempoRestanteHoras + " horas para nosso aniversario de 3 anos de namoro "
        } if (tempoRestanteHoras == 0) {
            contagemTresAnos.innerHTML = "Faltam " + tempoRestanteMinutos + " minutos para nosso aniversario de 3 anos de namoro "
        } if (tempoRestanteMinutos == 0) {
            contagemTresAnos.innerHTML = "Faltam " + tempoRestanteSegundos + " segundos para nosso aniversario de 3 anos de namoro "
        } else {
            
        }

      }
    }, 1000);
  }
  
// Data final do nosso aniversario de 3 anos
  var dataFinal = new Date(2023, 2, 5, 0, 0, 1);
  contagemRegressiva(dataFinal);


// Contagem regressiva para monique ir para o chile
function contagemRegressivaChile(dataFinal) {
    var intervalId = setInterval(function() {
      var dataAtual = new Date();
      var tempoRestante = Math.floor((((dataFinal - dataAtual) / 1000) / 60 / 60 ) / 24);

      var tempoRestanteHoras = Math.floor(((dataFinal - dataAtual) / 1000) / 60 / 60);

      var tempoRestanteMinutos = Math.floor(((dataFinal - dataAtual) / 1000) / 60 );

      var tempoRestanteSegundos = Math.floor((dataFinal - dataAtual) / 1000 );
      
      if (tempoRestante < 0) {
        console.log("Contagem regressiva completa!");
        clearInterval(intervalId);
      } else {
        const contagemTresAnos = document.getElementById('contagmChile');
        
        if (tempoRestante != "0") {
            contagemTresAnos.innerHTML = "Faltam " + tempoRestante + " dias para você ir para o chile"
        } if (tempoRestante == "0") {
            contagemTresAnos.innerHTML = "Faltam " + tempoRestanteHoras + " horas para você ir para o chile "
        } if (tempoRestanteHoras == 0) {
            contagemTresAnos.innerHTML = "Faltam " + tempoRestanteMinutos + " minutos para você ir para o chile"
        } if (tempoRestanteMinutos == 0) {
            contagemTresAnos.innerHTML = "Faltam " + tempoRestanteSegundos + " segundos para você ir para o chile"
        } else {
            
        }

      }
    }, 1000);
  }
  
// Data final do nosso aniversario de 3 anos
  var dataFinalChile = new Date(2023, 3, 10, 0, 0, 1);
  contagemRegressivaChile(dataFinalChile);