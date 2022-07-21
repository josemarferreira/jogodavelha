import { 
    inserirJogada, 
    corJogadores, 
    iniciaMatrix, 
    criarJogadores 
} from './start.js';
import * as calc from './calcular_resultado.js';

const dialog_inicio = document.getElementById('inicio');
const dialog_fim = document.getElementById('modal-winner');
const botao_inicio = document.getElementById('btn');
const botao_fim = document.getElementById('btn-fim');
const jogadorAtual = document.getElementById('jogadorAtual');
const campos = document.querySelectorAll(".box-campo");
const indMatrix = {
    0: [0,0],
    1: [0,1],
    2: [0,2],
    3: [1,0],
    4: [1,1],
    5: [1,2],
    6: [2,0],
    7: [2,1],
    8: [2,2],
}


// Esconde o Modal do Fim de Jogo
dialog_fim.style.visibility = "hidden";

let [jg1, jg2] = criarJogadores();
let jogadas = iniciaMatrix();
let jogador_atual = jg1;
let qtd_jogadas = 0;

// Quando o jogador apertar o botão jogar
botao_inicio.addEventListener('click', () => {
    // Define os jogadores
    jg1.marca = marking.options[marking.selectedIndex].text;
    jg2.marca = jg1.marca == "X" ? "O" : "X";
    corJogadores(jg1,jg2);

    dialog_inicio.style.visibility = "hidden";
    jogadorAtual.innerHTML = jg1.marca;
    jogadorAtual.className = jg2.cor;
});

// Reinicia o Jogo
botao_fim.addEventListener('click', () => {
    // Limpa os Campos
    for (let i = 0; i < campos.length; i++) {
        campos[i].innerHTML = "";
        campos[i].className = "box-campo";
    }

    jogadas = iniciaMatrix();
    [jg1, jg2] = criarJogadores();
    qtd_jogadas = 0;
    jogador_atual = jg1;
    
    dialog_inicio.style.visibility = "visible";
    dialog_fim.style.visibility = "hidden";
});


for (let i = 0; i < campos.length; i++) {
    campos[i].addEventListener('click', () => {
        if (campos[i].innerHTML == ""){
            jogadas[indMatrix[i][0]][indMatrix[i][1]] = inserirJogada(campos[i], jogador_atual);
            qtd_jogadas++;
            calcResultado();
            trocarJogadorAtual();
        }
    });
}


// Calcula a Soma das Linhas e das Colunas e das Diagonais
// Caso haja um vencedor, mostra o resultado
const calcResultado = () => {
    if(qtd_jogadas >= 5){
        for(let i = 0; i < 3; i++){
            if(Math.abs(calc.somaLinha(jogadas[i])) == 3){
                return mostrarVencedor(jogador_atual);
            }
            else if(Math.abs(calc.somaColuna(jogadas,i)) == 3){
                return mostrarVencedor(jogador_atual);
            }
        }

        if(Math.abs(calc.somaDiagonal1(jogadas)) == 3 || Math.abs(calc.somaDiagonal2(jogadas)) == 3){
            return mostrarVencedor(jogador_atual);
        }

        if(qtd_jogadas == 9){
            return mostrarVencedor("velha");
        }
    }
}

// Troca os jogadores atual
const trocarJogadorAtual = () => {
    jogador_atual = jogador_atual == jg1 ? jg2 : jg1;
    jogadorAtual.className = jogador_atual.cor;
    jogadorAtual.innerHTML = jogador_atual.marca;
};

//Mostra o Vencedor
const mostrarVencedor = (jogador) => {
    dialog_fim.style.visibility = "visible";
    if (jogador == "velha"){
        document.querySelector('.message').innerHTML = "Deu Velha!";
        let img = document.createElement('img')
        img.setAttribute('src', 'img/velha.png');
        img.classList.add('velha');
        document.querySelector('.winner').innerHTML = "";
        document.querySelector('.winner').appendChild(img);
    }
    else {
        document.querySelector('.winner').innerHTML = jogador.marca;
        document.querySelector('.message').innerHTML = "Vencedor!";
    }
};

