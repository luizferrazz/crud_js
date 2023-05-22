// CRUD

// Criando um Produto:
const fimDeFeira = {
    parceiros : [
        {
            parceiro: 'Fulano',

        }
    ],
    arrayProdutos: [
        {
            fornecedor: 'Fulano',
            produto: {
                id: 1,
                nome: 'Chocolate Lacta',
                valor: 3.20,
                quantidade: 32,
                descricao: 'Lote vencendo em 10/06/2023'
            }
        }
    ],
};

// Create:
function cadastrarProduto(dados){
    fimDeFeira.arrayProdutos.push({
        id: fimDeFeira.arrayProdutos.length + 1,
        fornecedor: dados.fornecedor,
        produto: dados.produto
    });
};
cadastrarProduto({fornecedor: 'fulano', produto: {nome: 'Diamante Negro', valor: 3.50, quantidade: 8, descricao: 'Lote vencendo em 28/05/2023'}});
cadastrarProduto({fornecedor: 'fulano', produto: {nome: 'Coca-Cola 2 Litros', valor: 2.50, quantidade: 25, descricao: 'Lote vencendo em 01/06/2023'}});

// Read:
function retornarProdutos(){
    return fimDeFeira.arrayProdutos;
}
console.log(retornarProdutos());

// Update:
function atualizarProduto(fimDeFeira, indice, chave, atualizacao){
    let atualizandoProduto = fimDeFeira.arrayProdutos[indice]
    if(atualizandoProduto){
        atualizandoProduto.produto[chave] = atualizacao
    }
    return fimDeFeira.arrayProdutos;
}
console.log(atualizarProduto(fimDeFeira, 0,"valor", 5.5))

// Delete:
function apagarProduto(fimDeFeira, indice){
    let apagandoProduto = fimDeFeira.arrayProdutos
    if(indice >= 0 && indice < apagandoProduto.length){
        apagandoProduto.splice(indice, 1)
    }
    return fimDeFeira;
}
console.log(apagarProduto(fimDeFeira, 0))
