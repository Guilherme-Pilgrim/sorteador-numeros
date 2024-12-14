function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let valorMinimo = parseInt(document.getElementById('de').value);
    let valorMaximo = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;
if (valorMinimo >= valorMaximo){
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    erroValores();
} else if (quantidadeDeNumeros > (valorMaximo - valorMinimo)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado. Verifique!');
    erroValores();
} else {
    for (let i = 0; i < quantidadeDeNumeros; i++) {
        numero = gerandoNumeroAleatório(valorMinimo, valorMaximo);

        while (sorteados.includes(numero)) {
            numero = gerandoNumeroAleatório(valorMinimo, valorMaximo);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    alterarStatusBotaoReiniciar();
}
}

function gerandoNumeroAleatório(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoReiniciar() {
    let botaoR = document.getElementById('btn-reiniciar')
    if (botaoR.classList.contains('container__botao-desabilitado')) {
        botaoR.classList.remove('container__botao-desabilitado');
        botaoR.classList.add('container__botao');
    } else {
        botaoR.classList.remove('container__botao');
        botaoR.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotaoReiniciar();
}

function erroValores() {
    reiniciar();
    alterarStatusBotaoReiniciar();
}