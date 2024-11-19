// script.js

// Lista de cidades disponíveis com a quantidade de vagas
let cidades = [
    { nome: "Cidade A", vagas: 1 },
    { nome: "Cidade B", vagas: 1 },
    { nome: "Cidade C", vagas: 1 },
    { nome: "Cidade D", vagas: 1 },
    { nome: "Cidade E", vagas: 1 }
];

// Função para atualizar o select com as cidades disponíveis
function atualizarCidades() {
    const cidadeSelect = document.getElementById('cidade-select');
    cidadeSelect.innerHTML = ''; // Limpa a lista de cidades antes de atualizar

    // Adiciona as opções de cidades com vagas disponíveis
    cidades.forEach((cidade, index) => {
        if (cidade.vagas > 0) {
            let option = document.createElement('option');
            option.value = index; // Usamos o índice para identificar a cidade
            option.textContent = cidade.nome;
            cidadeSelect.appendChild(option);
        }
    });
}

// Função para confirmar a escolha da cidade
function confirmarEscolha() {
    const cidadeSelect = document.getElementById('cidade-select');
    const feedback = document.getElementById('feedback');
    
    const cidadeIndex = cidadeSelect.value;

    if (cidadeIndex !== "") {
        // Marca a cidade como escolhida
        cidades[cidadeIndex].vagas -= 1;
        
        // Exibe a cidade escolhida
        feedback.textContent = `Você escolheu a ${cidades[cidadeIndex].nome}.`;
        
        // Atualiza a lista de cidades disponíveis
        atualizarCidades();
    } else {
        feedback.textContent = "Por favor, selecione uma cidade.";
    }
}

// Evento de clique no botão de confirmação
document.getElementById('confirmar-button').addEventListener('click', confirmarEscolha);

// Inicializa as cidades disponíveis na página
atualizarCidades();
