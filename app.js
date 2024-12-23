let quantidade;
let maximo;
let minimo;
let listaDeNumerosSorteados = [];
let numeroSorteado;

function mostrarNumerosSorteados (mensagem) {
    let texto = document.getElementById('resultado').querySelector('label');
    texto.innerHTML = mensagem;
}

function valoresDigitados () {
    quantidade = parseInt(document.getElementById('quantidade').value);
    minimo = parseInt(document.getElementById('de').value);
    maximo = parseInt(document.getElementById('ate').value);
}

function sorteadorDeNumero (de, ate) {
   return parseInt(Math.random () * (ate - de + 1) + de); 
}

function mudarBotaoReiniciar(antigo, novo) {
    let botaoreiniciar = document.getElementById('btn-reiniciar');
    botaoreiniciar.classList.replace (antigo, novo);
}

mostrarNumerosSorteados('Números Sorteados: Nenhum no momento')
document.getElementById('btn-reiniciar').setAttribute('disabled', true)

function sortear() {
    valoresDigitados ()

    if (minimo > maximo) {
        mostrarNumerosSorteados('Certifique-se de que o valor no campo "Do Número" é menor que o do "Até"');
        reiniciarValores();
        return;
    }

    while (listaDeNumerosSorteados.length != quantidade) {
          numeroSorteado = sorteadorDeNumero(minimo,maximo);
        if (listaDeNumerosSorteados.includes(numeroSorteado)) {
             numeroSorteado = sorteadorDeNumero(minimo,maximo);
        } else {
             listaDeNumerosSorteados.push(numeroSorteado);        
        }
    }

   mostrarNumerosSorteados ('Números Sorteados: ' + listaDeNumerosSorteados);
   mudarBotaoReiniciar("container__botao-desabilitado", 'container__botao'); 
   document.getElementById('btn-reiniciar').removeAttribute('disabled');
}

function reiniciarValores () {
    quantidade = document.getElementById('quantidade');
    quantidade.value = '';
    minimo = document.getElementById('de');
    minimo.value = '';
    maximo = document.getElementById('ate');
    maximo.value = '';
}

function reiniciar() {
    reiniciarValores();
    mostrarNumerosSorteados ('Números Sorteados: Nenhum no momento');
    listaDeNumerosSorteados = [];
    document.getElementById('btn-reiniciar').setAttribute('disabled', true);
    mudarBotaoReiniciar ('container__botao', "container__botao-desabilitado")
}
