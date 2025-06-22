function extrairPalavrasUnicas(str) {
    const palavras = str.split(' ');
    const palavrasUnicas = [];
    for (let i = 0; i < palavras.length; i++) {const palavra = palavras[i];
        if (palavrasUnicas.indexOf(palavra) === -1) {palavrasUnicas.push(palavra);}
    }
    return palavrasUnicas;
}