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
    ],
    imprimirResumo: function () {
        console.log(`cliente: ${this.nomeDoCliente}`);
        let totalItens = 0;
        let totalApagar = 0;
        for (let busca of this.produtos) {
            totalItens = totalItens + busca.qtd;
            totalApagar = totalApagar + (busca.precoUnit * busca.qtd);
        }
        console.log(`Total de Itens: ${totalItens}`);
        console.log(`Total a Pagar: R$${(totalApagar / 100).toFixed(2)}`)
        // toLocaleString('pt-BR', { minimumFractionDigits: 2 })
    }
}
imprimirResumoDoCarinho(carrinho);