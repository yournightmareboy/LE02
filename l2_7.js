function ordenarProdutosPorPreco(produtos) {
    const produtosOrdenados = [...produtos].sort((a, b) => a[1] - b[1]);
    const nomesOrdenados = produtosOrdenados.map(produto => produto[0]);
    
    return nomesOrdenados;
}