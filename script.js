// Lista de cidades com vagas
const cidades = [
    { nome: "Cidade A", vagas: 1 },
    { nome: "Cidade B", vagas: 1 },
    { nome: "Cidade C", vagas: 1 },
    { nome: "Cidade D", vagas: 1 }
];

// Preencher a lista de cidades na página
function carregarCidades() {
    const listaCidades = document.getElementById("lista-cidades");
    const selectCidades = document.getElementById("cidade-selecionada");

    // Limpar as listas
    listaCidades.innerHTML = "";
    selectCidades.innerHTML = "";

    cidades.forEach(cidade => {
        if (cidade.vagas > 0) {
            const li = document.createElement("li");
            li.textContent = `${cidade.nome} - Vagas Disponíveis: ${cidade.vagas}`;
            listaCidades.appendChild(li);

            const option = document.createElement("option");
            option.value = cidade.nome;
            option.textContent = `${cidade.nome} (${cidade.vagas} vagas disponíveis)`;
            selectCidades.appendChild(option);
        }
    });
}

// Confirmar a escolha do candidato
document.getElementById("confirmar-escolha").addEventListener("click", function() {
    const cidadeEscolhida = document.getElementById("cidade-selecionada").value;
    
    if (cidadeEscolhida) {
        const cidadeIndex = cidades.findIndex(c => c.nome === cidadeEscolhida);

        if (cidades[cidadeIndex].vagas > 0) {
            cidades[cidadeIndex].vagas -= 1; // Reduzir a vaga
            carregarCidades(); // Recarregar lista de cidades

            // Exibir feedback
            document.getElementById("feedback").textContent = `Você escolheu ${cidadeEscolhida}.`;
        } else {
            document.getElementById("feedback").textContent = `Desculpe, não há mais vagas para ${cidadeEscolhida}.`;
        }
    } else {
        document.getElementById("feedback").textContent = "Por favor, selecione uma cidade.";
    }
});

// Carregar as cidades ao carregar a página
window.onload = carregarCidades;
