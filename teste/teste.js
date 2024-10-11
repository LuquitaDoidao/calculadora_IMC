document.getElementById('perguntasFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura todos os inputs de tipo "number" do formulário
    let perguntas = document.querySelectorAll('input[type="number"]');
    let respostas = []; // Array para armazenar as respostas numéricas

    // Pontuação para cada cor (inicialmente zero)
    let pontuacoes = {
        azul: 0,
        amarelo: 0,
        vermelho: 0,
        roxo: 0,
        laranja: 0,
        verde: 0,
        preto: 0,
        branco: 0,
        cinza: 0,
        rosa: 0,
        marrom: 0,
        ciano: 0
    };

    // Tabela de pontuações: cada chave é uma pergunta e armazena os pontos para cada cor
    const tabelaPontuacao = {
        pergunta1: { // Pontuação para as cores na pergunta 1
            azul: 2,
            vermelho: 3,
            amarelo: 1,
            roxo: 1,
            verde: 2,
            laranja: 1,
            preto: 1,
            branco: 2,
            cinza: 1,
            rosa: 1,
            marrom: 2,
            ciano: 1
        },
        pergunta2: { // Pontuação para as cores na pergunta 2
            azul: 3,
            vermelho: 1,
            amarelo: 2,
            roxo: 2,
            verde: 1,
            laranja: 2,
            preto: 3,
            branco: 1,
            cinza: 2,
            rosa: 2,
            marrom: 1,
            ciano: 3
        },
        pergunta3: {
            azul: 1,
            vermelho: 3,
            amarelo: 3,
            roxo: 1,
            verde: 2,
            laranja: 3,
            preto: 2,
            branco: 1,
            cinza: 1,
            rosa: 3,
            marrom: 2,
            ciano: 1
        },
        pergunta4: {
            azul: 2,
            vermelho: 1,
            amarelo: 3,
            roxo: 2,
            verde: 3,
            laranja: 2,
            preto: 1,
            branco: 3,
            cinza: 2,
            rosa: 1,
            marrom: 1,
            ciano: 3
        },
        pergunta5: {
            azul: 3,
            vermelho: 2,
            amarelo: 2,
            roxo: 3,
            verde: 1,
            laranja: 2,
            preto: 2,
            branco: 1,
            cinza: 3,
            rosa: 2,
            marrom: 3,
            ciano: 1
        }
    };

    // Itera sobre os campos de perguntas e armazena as respostas no array
    perguntas.forEach(function(pergunta) {
        respostas.push(parseInt(pergunta.value));
    });

    // Itera sobre as respostas e aplica a tabela de pontuação
    respostas.forEach(function(resposta, index) {
        let perguntaChave = `pergunta${index + 1}`; // Cria a chave da pergunta (ex: "pergunta1")
        let pontos = tabelaPontuacao[perguntaChave]; // Recupera a tabela de pontos correspondente à pergunta

        // Dependendo da resposta, ajusta a pontuação das cores
        Object.keys(pontos).forEach(function(cor) {
            pontuacoes[cor] += pontos[cor] * resposta; // Multiplica os pontos pelo valor da resposta
        });
    });

    // Descobrir a cor com a maior pontuação
    let corFinal = Object.keys(pontuacoes).reduce((a, b) => pontuacoes[a] > pontuacoes[b] ? a : b);

    // Exibir a resposta final
    document.getElementById('resposta').innerText = `A cor que representa você é: ${corFinal}`;
});
