// Inicializa Matriz
export function iniciaMatrix(){
    let matriz = [];
    for(let i = 0; i < 3; i++){
        matriz.push([]);
        for(let j = 0; j < 3; j++){
            matriz[i].push(0);
        }
    }
    return matriz;
}

// Inicia os Jogadores
export function criarJogadores(){
	return [
		{
        	marca: "", 
        	valor: 1,
        	cor: ""
    	},
    	{
        	marca: "", 
        	valor: -1,
        	cor: ""
    	}
	];
}

// Defini as cores dos jogadores
export function corJogadores(j1, j2){
	if(j1.marca == "X"){
		j1.cor = "red";
		j2.cor = "blue";
	}
	else {
		j2.cor = "red";
		j1.cor = "blue";
	}
}

// Adiciona Jogada ao Campo e valor a Matriz
export function inserirJogada(campo, jogador){
	campo.innerHTML = jogador.marca;
    campo.classList.add(jogador.cor);
    return jogador.valor;
}
