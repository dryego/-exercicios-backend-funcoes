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
        console.log(`Total de Itens: ${this.calcularTotalDeItens()}`);
        console.log(`Total a Pagar: R$${(this.calcularTotalAPagar() / 100).toFixed(2)}`)

    },
    addProduto: function (produto) {
        const { produtos } = this;
        let achou = false;
        for (let busca of this.produtos) {
            if (busca.id === produto.id) {
                busca.qtd += produto.qtd++;
                achou = true;
            }
        }
        if (!achou) {
            this.produtos.push(produto);
        }
    },
    imprimirdetalhes: function () {
        console.log(`Nome do cliente: ${this.nomeDoCliente}\n`);

        for (let busca of this.produtos) {
            console.log(`Item ${busca.id} - ${busca.nome} - ${busca.qtd} und - R$${(busca.precoUnit / 100).toFixed(2)}`);
        }
        console.log(`\nTotal de itens: ${this.calcularTotalDeItens()} itens\nTotal a pagar: R$${(this.calcularTotalAPagar() / 100).toFixed(2)}`);

    },
    calcularTotalDeItens: function () {
        let totalItens = 0;
        for (let busca of this.produtos) {
            totalItens = totalItens + busca.qtd;
        }
        return totalItens;

    },
    calcularTotalAPagar: function () {
        let totalApagar = 0;
        for (let busca of this.produtos) {
            totalApagar = totalApagar + (busca.precoUnit * busca.qtd);
        }
        return totalApagar;
    },
}


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000

}
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
//addProdutoAoCarrinho(carrinho, novaBermuda);
carrinho.imprimirResumo();
carrinho.imprimirdetalhes();
console.log(carrinho.produtos);