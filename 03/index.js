const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ]
}
function imprimirResumoDoCarinho(carrinho) {
    console.log(`cliente: ${carrinho.nomeDoCliente}`);
    let totalItens = 0;
    let totalApagar = 0;
    for (let busca of carrinho.produtos) {
        totalItens = totalItens + busca.qtd;
        totalApagar = totalApagar + (busca.precoUnit * busca.qtd);
    }
    console.log(`Total de Itens: ${totalItens}`);
    console.log(`Total a Pagar: R$${(totalApagar / 100).toFixed(2)}`)
    // toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}




// for (let busca of carrinho.produtos) {
//     const { nomeDoCliente, produtos } = busca;
//     let totalItens = 0;
//     //if (busca.produtos > 0) {
//     totalItens = [produtos].reduce(function (acumulador, valorAtual) {
//         return acumulador + valorAtual;

//     }, totalItens);
//     console.log(totalItens);

//     //}




imprimirResumoDoCarinho(carrinho);