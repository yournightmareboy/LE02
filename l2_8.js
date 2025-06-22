function agruparVendasPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        if (acumulador[venda.cliente]) {acumulador[venda.cliente] += venda.total;} 
        else {acumulador[venda.cliente] = venda.total;}
        return acumulador;}, {});
}