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
	return {
		jogador1: {
        	marca: "", 
        	valor: 1,
        	cor: ""
    	},
    	jogador2: {
        	marca: "", 
        	valor: -1,
        	cor: ""
    	}
	};
}