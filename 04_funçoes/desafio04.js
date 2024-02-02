//1 - função que escreveMeuNome

function escreveMeuNomeConsole(nome) {
    console.log("Seu nome é " + nome);
}

function escreveMeuNomeReturn(nome) {
    console.log("Seu nome é " + nome);
}
// a diferença das duas funções acima é que a primeira tem um console.log para escrever a informação, ela não retorna valor nenhum. Enquanto a segunda retorna o texto digitado a seguir, sem o console.log, dessa forma podendo ser usada com outra função.


//2 - função que verifica se é maior de idade

function verificarMaioridade(idade) {
    if (idade >= 18) {
        return "Você é maior de idade";
    } else {
        return "Você é menor de idade";
    }
}


//3 - função para o problema do Juros

// Código Condição de pagamento:
// - A: À vista Débito, recebe 10% de desconto;
// - B: À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - C: Em duas vezes, preço normal de etiqueta sem juros;
// - D: Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

function problemaJuros(valor, condicaoPagamento) {

    if (condicaoPagamento === "A") {

        const valorFinal = valor - (valor * 0.1);
        return ("Forma de Pagamento: " + condicaoPagamento + " - Valor final: R$" + valorFinal)

    } else if (condicaoPagamento === "B") {

        const valorFinal = valor - (valor * 0.15);
        return ("Forma de Pagamento: " + condicaoPagamento + " - Valor final: R$" + valorFinal)

    } else if (condicaoPagamento === "C") {

        const valorFinal = valor;
        return ("Forma de Pagamento: " + condicaoPagamento + " - Valor final: R$" + valorFinal)

    } else if (condicaoPagamento === "D") {

        const valorFinal = valor + (valor * 0.1);
        return ("Forma de Pagamento: " + condicaoPagamento + " - Valor final: R$" + valorFinal)

    }

}

(function main() {

    //1
    escreveMeuNomeConsole("Raul");
    escreveMeuNomeReturn("Junior")

    //2
    console.log(escreveMeuNomeReturn('Raul ') + verificarMaioridade(18));

    //3
    console.log(problemaJuros(50, "A"));

})();