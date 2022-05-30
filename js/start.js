
// Verifica se o campo já foi marcado ou nao
export function podeAdicionar(campo){
    return campo == 0;
}

// Defini as cores dos jogadores
export function cor(jogadores){
	if(jogadores.jogador1.marca == "X"){
		jogadores.jogador1.cor = "red";
		jogadores.jogador2.cor = "blue";
	}
	else {
		jogadores.jogador2.cor = "red";
		jogadores.jogador1.cor = "blue";
	}
}

// Manipula Campos
export function inserir(campo, jogador){
	campo.innerHTML = jogador.marca;
    campo.style.color = jogador.cor;
    return jogador.valor;
}
