let quantidade;
let maximo;
let minimo;
let listaDeNumerosSorteados = [];

function mostrarNumerosSorteados (mensagem) {
    let texto = document.getElementById('resultado').querySelector('label');
    texto.innerHTML = mensagem;
}

function valoresDigitados () {
    quantidade = parseInt(document.getElementById('quantidade').value);
    minimo = parseInt(document.getElementById('de').value);
    maximo = parseInt(document.getElementById('ate').value);
}

function mudarBotaoReiniciar(antigo, novo) {
    let botaoreiniciar = document.getElementById('btn-reiniciar');
    botaoreiniciar.classList.replace (antigo, novo);
    document.getElementById('btn-reiniciar').removeAttribute('disabled');
}

mostrarNumerosSorteados('Números Sorteados: Nenhum no momento')
document.getElementById('btn-reiniciar').setAttribute('disabled', true)

function sortear() {
    valoresDigitados ()
    while (listaDeNumerosSorteados.length != quantidade) {
        let numeroSorteado = parseInt(Math.random () * (maximo - minimo) + minimo);

        if (listaDeNumerosSorteados.includes(numeroSorteado)) {
                return sortear();
        } else {
                listaDeNumerosSorteados.push(numeroSorteado);        
        }
    }
   mostrarNumerosSorteados ('Números Sorteados: ' + listaDeNumerosSorteados);
   mudarBotaoReiniciar("container__botao-desabilitado", 'container__botao'); 
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
}
