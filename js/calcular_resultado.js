//Retorna a Soma dos valores da Linha
export function somaLinha(linha){
    return linha.reduce((soma, item) => soma += item, 0);
}

//Retorna a Soma dos valores da Coluna
export function somaColuna(jogadas,coluna){
    let soma = 0;
    for (let i = 0; i < 3; i++){
        soma += jogadas[i][coluna];
    }
    return soma;
}

//Retorna a Soma dos Valores das Diagonais
export function somaDiagonal1(jogadas){
    return jogadas[0][0] + jogadas[1][1] + jogadas[2][2];
}

export function somaDiagonal2(jogadas){
    return jogadas[0][2] + jogadas[1][1] + jogadas[2][0];
}