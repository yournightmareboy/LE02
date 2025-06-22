function paresParaObjeto(pares) {
    return pares.reduce((obj, [chave, valor]) => {obj[chave] = valor;
        return obj;}, {});
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}