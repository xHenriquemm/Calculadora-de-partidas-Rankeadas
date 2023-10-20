// Função que calcula o saldo de Rankeadas e determina o nível do jogador
function calcularNivelEExibirMensagem(vitorias, derrotas) {
    const saldoRankeadas = vitorias - derrotas;
    let nivel;

    // Determinando o nível com base na quantidade de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibindo a mensagem com o saldo de Rankeadas e o nível do jogador
    console.log(`O Herói tem um saldo de ${saldoRankeadas} está no nível de ${nivel}`);
}

// Chamando a função com diferentes valores de vitórias e derrotas
const jogadorVitorias = 65;
const jogadorDerrotas = 30;
calcularNivelEExibirMensagem(jogadorVitorias, jogadorDerrotas);
