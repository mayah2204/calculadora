// Array que vai armazenar os números e operadores
let expressao = [];

// Mostra o conteúdo do Array no display
function atualizarDisplay() {
    document.getElementById("display").value = expressao.join("");
}

// Adiciona números e operadores no Array
function adicionar(valor) {
    expressao.push(valor);

    atualizarDisplay();

    console.log("Array:", expressao);
}

// Limpa o Array
function limpar() {
    expressao = [];

    atualizarDisplay();

    console.log("Array limpo:", expressao);
}

// Remove o último elemento do Array
function apagar() {
    expressao.pop();

    atualizarDisplay();

    console.log("Array:", expressao);
}

// Realiza o cálculo
function calcular() {
    if (expressao.length === 0) {
        return;
    }

    try {
        // Junta os elementos do Array em uma expressão
        let conta = expressao.join("");

        // Calcula o resultado
        let resultado = eval(conta);

        // Coloca o resultado dentro do Array
        expressao = [resultado.toString()];

        atualizarDisplay();

        console.log("Resultado:", resultado);
        console.log("Array final:", expressao);

    } catch (erro) {
        document.getElementById("display").value = "Erro";

        expressao = [];
    }
}
