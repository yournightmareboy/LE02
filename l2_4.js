function fatorial(n) {
    if (n < 0) {throw new Error("Não existe fatorial de números negativos");}
    if (n === 0) {return 1;}
    return n * fatorial(n - 1);}


