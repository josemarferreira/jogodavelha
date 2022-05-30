import { podeAdicionar, inserir, cor} from './start.js';
import { iniciaMatrix, criarJogadores} from './definir.js';
import * as calc from './calcular_resultado.js';

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const game = document.getElementById('game');
const fim = document.getElementById('modal-winner');
const botao_inicio = document.getElementById('btn');
const botao_fim = document.getElementById('btn-fim');
const jogadorAtual = document.getElementById('jogadorAtual');

// Esconde o Modal do Fim de Jogo
fim.style.visibility = "hidden";

// Cria o objeto dos jogadores
let jogadores = criarJogadores();

// Cria a Matriz que armazenara as jogadas
let jogadas = iniciaMatrix();

// Quando o jogador apertar o botão jogar
botao_inicio.addEventListener('click', () => {
    // Define os jogadores
    jogadores.jogador1.marca = marking.options[marking.selectedIndex].text;
    jogadores.jogador2.marca = jogadores.jogador1.marca == "X" ? "O" : "X";
    cor(jogadores);

    game.style.visibility = "hidden";
    jogadorAtual.innerHTML = jogadores.jogador1.marca;
    jogadorAtual.style.color = jogadores.jogador1.cor;
});

//Seta o jogador atual para o primeiro jogador
let jogador_atual = jogadores.jogador1;

// Armazena o número de jogadas
let qtd_jogadas = 0;

// Defini os eventos para cada campo
one.addEventListener('click', () => {
    if(podeAdicionar(jogadas[0][0])){
        jogadas[0][0] = inserir(one, jogador_atual);
        qtd_jogadas++;
        calcResultado();
        trocaJogadorAtual();
    }
});

two.addEventListener('click', () => {
    if(podeAdicionar(jogadas[0][1])){
        jogadas[0][1] = inserir(two, jogador_atual);
        qtd_jogadas++;
        calcResultado();
        trocaJogadorAtual();
    }
});

three.addEventListener('click', () => {
    if(podeAdicionar(jogadas[0][2])){
        jogadas[0][2] = inserir(three, jogador_atual);
        qtd_jogadas++;
        calcResultado();
        trocaJogadorAtual();
    }
});

four.addEventListener('click', () => {
    if(podeAdicionar(jogadas[1][0])){
        jogadas[1][0] = inserir(four, jogador_atual);
        qtd_jogadas++;
        calcResultado();
        trocaJogadorAtual();
    }
});

five.addEventListener('click', () => {
    if(podeAdicionar(jogadas[1][1])){
        jogadas[1][1] = inserir(five, jogador_atual);
        qtd_jogadas++;
        calcResultado();
        trocaJogadorAtual();
    }
});

six.addEventListener('click', () => {
    if(podeAdicionar(jogadas[1][2])){
        jogadas[1][2] = inserir(six, jogador_atual);
        qtd_jogadas++;
        calcResultado();
        trocaJogadorAtual();
    }
});

seven.addEventListener('click', () => {
    if(podeAdicionar(jogadas[2][0])){
        jogadas[2][0] = inserir(seven, jogador_atual);
        qtd_jogadas++;
        calcResultado();
        trocaJogadorAtual();
    }
});

eight.addEventListener('click', () => {
    if(podeAdicionar(jogadas[2][1])){
        jogadas[2][1] = inserir(eight, jogador_atual);
        qtd_jogadas++;
        calcResultado();
        trocaJogadorAtual();
    }
});

nine.addEventListener('click', () => {
    if(podeAdicionar(jogadas[2][2])){
        jogadas[2][2] = inserir(nine, jogador_atual);
        qtd_jogadas++;
        calcResultado();
        trocaJogadorAtual();
    }
});

//Reinicia o Jogo
botao_fim.addEventListener('click', () => {
    // Limpa os Campos
    one.innerHTML = "";
    two.innerHTML = " ";
    three.innerHTML = "";
    four.innerHTML = "";
    five.innerHTML = "";
    six.innerHTML = "";
    seven.innerHTML = "";
    eight.innerHTML = "";
    nine.innerHTML = "";

    //Zera a Matriz
    jogadas = iniciaMatrix();

    //Zera os Objetos e a contagem
    jogadores = criarJogadores();
    qtd_jogadas = 0;
    jogador_atual = jogadores.jogador1;
    
    game.style.visibility = "visible";
    fim.style.visibility = "hidden";
});

//Verifica e retorna o resultado
const calcResultado = () => {
    // Se o número de jogadas, já possibilita a existência de um vencedor
    if(qtd_jogadas >= 5){
        //Calcula a Soma das Linhas e das Colunas e das Diagonais
        //Caso haja um vencedor, mostra o resultado
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
        
        //Se ninguém ganhar retorna velha
        if(qtd_jogadas == 9){
            return mostrarVencedor("velha");
        }
    }
}

// Troca os jogadores atual
const trocaJogadorAtual = () => {
    jogador_atual = jogador_atual == jogadores.jogador1 ? jogadores.jogador2 : jogadores.jogador1;
    jogadorAtual.innerHTML = jogador_atual.marca;
    jogadorAtual.style.color = jogador_atual.cor;
};

//Mostra o Vencedor
const mostrarVencedor = (jogador) => {
    fim.style.visibility = "visible";
    if (jogador == "velha"){
        document.querySelector('.message').innerHTML = "Deu Velha!";
        let img = document.createElement('img')
        img.setAttribute('src', 'img/velha.png');
        document.querySelector('.winner').innerHTML = "";
        document.querySelector('.winner').appendChild(img);
    }
    else {
        document.querySelector('.winner').innerHTML = jogador.marca;
        document.querySelector('.message').innerHTML = "Vencedor!";
    }
};

