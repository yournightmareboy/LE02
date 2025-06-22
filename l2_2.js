function jogoAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let palpite;
    
    console.log("Bem-vindo ao Jogo de Adivinhação!");
    console.log("Tente adivinhar o número entre 1 e 100.");
    while (true) {palpite = parseInt(prompt("Digite seu palpite:"));
        tentativas++;        
        if (isNaN(palpite) || palpite < 1 || palpite > 100) {console.log("Por favor, digite um número válido entre 1 e 100."); 
            continue;}
        if (palpite === numeroAleatorio) {console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
            break;
        } 
        else if (palpite < numeroAleatorio) {console.log("Mais alto. Tente novamente.");
            } else {console.log("Mais baixo. Tente novamente.");
        }
    }
}

