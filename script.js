const corrente = document.getElementById('Inputcorrente');
const tensao = document.getElementById('Inputtensão');
const resistencia = document.getElementById('Inputresistência');
const areaResultado = document.getElementById('resultado');

const btnTensao = document.getElementById('bnCalcularTensao');
const btnCorrente = document.getElementById('bnCalcularCorrente')
const btnResistencia = document.getElementById('bnCalcularResistencia')

function calcularCorrente(){
    // I = U/R
    const valorTensao = parseFloat(tensao.value);
    const valorResistencia = parseFloat(resistencia.value);

    if(isNaN(valorTensao)  || isNaN(valorResistencia)){
        exibirResultado(`Erro: Preencha os campos da tesão eletrica e resistencia eletrica.`);
        return;
    }

    if (valorResistencia === 0) {
    exibirResultado(`Erro: A Resistência (R) não pode ser zero.`);
    return;
}

    let calculoCorrente = valorTensao/valorResistencia;

    exibirResultado(`A Corrente é igual a ${calculoCorrente.toFixed(2)} A`);
    
}

function calcularTensao(){
    // U = I * R
    const valorCorrente = parseFloat(corrente.value);
    const valorResistencia = parseFloat(resistencia.value);

    if(isNaN(valorCorrente) || isNaN(valorResistencia)){
        exibirResultado(`Erro: Preencha os campos da corrente eletrica e resistencia eletrica.`);
        return;
    }

    let calculoTensao = valorCorrente * valorResistencia;

    exibirResultado(`A Tesão é igual a ${calculoTensao.toFixed(2)} V`);
    
}
function calcularResistencia(){
    // R = U/I
    const valorTensao = parseFloat(tensao.value);
    const valorCorrente = parseFloat(corrente.value);

    if(isNaN(valorCorrente) || isNaN(valorTensao)){
        exibirResultado(`Erro: Preencha os campos da corrente eletrica e tensão eletrica.`);
        return;
    }

    if (valorCorrente === 0) {
    exibirResultado(`Erro: A Corrente (A) não pode ser zero.`);
    return;
}

    let calculoResistencia = valorTensao/valorCorrente;

    exibirResultado(`A Resistência é igual a ${calculoResistencia.toFixed(2)} Ohms`);
    
}

function exibirResultado(mensagem){
    areaResultado.textContent = mensagem;
}

btnCorrente.addEventListener('click', calcularCorrente);
btnTensao.addEventListener('click', calcularTensao);
btnResistencia.addEventListener('click', calcularResistencia);