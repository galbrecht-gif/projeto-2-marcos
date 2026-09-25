// Pega no botão "Buscar CEP" do HTML pelo ID
const botao = document.getElementById("btnBuscar");

// Pega na área onde o resultado da consulta será exibido
const resultado = document.getElementById("resultado");

// Quando o utilizador clicar no botão, a função buscarCep será executada
botao.addEventListener("click", buscarCep);

// Função responsável por consultar o CEP
async function buscarCep() {
    // Pega no CEP digitado pelo utilizador e remove tudo o que não for número
    const cep = document.getElementById("cep").value.replace(/\D/g, "");

    // Verifica se o CEP possui exatamente 8 números
    if (cep.length !== 8) {
        resultado.innerHTML = "<p>Digite um CEP válido com 8 números.</p>";
        return;
    }

    // Mostra mensagem enquanto a consulta é realizada
    resultado.innerHTML = "<p>A consultar...</p>";

    try {
        // Faz a requisição para a BrasilAPI
        const resposta = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);

        // Verifica se a resposta foi bem-sucedida
        if (!resposta.ok) {
            throw new Error("CEP não encontrado!");
        }

        // Converte a resposta para JSON
        const dados = await resposta.json();

        // Exibe os dados recebidos na página
        resultado.innerHTML = `
            <p><strong>Rua:</strong> ${dados.street || "Não informado"}</p>
            <p><strong>Bairro:</strong> ${dados.neighborhood || "Não informado"}</p>
            <p><strong>Cidade:</strong> ${dados.city || "Não informado"}</p>
            <p><strong>Estado:</strong> ${dados.state || "Não informado"}</p>
        `;
    } catch (erro) {
        // Trata os erros encontrados no try
        resultado.innerHTML = <p style="color: red;">${erro.message}</p>;
    }
}