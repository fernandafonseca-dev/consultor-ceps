const input = document.getElementById("search-input");
const result = document.getElementById("result");

function showResult(message, type) {
  result.innerHTML = message;
  result.className = `result ${type}`;
}

async function handleSearch() {
  const rawCep = input.value.replace(/\D/g, "");

  if (rawCep.length !== 8) {
    showResult(
      "CEP inválido. Use 8 números (ex: 12328070 ou 12.328-070)",
      "error",
    );
  } else {
    showResult("Consultando CEP...", "loading");

    const response = await fetch(`https://viacep.com.br/ws/${rawCep}/json/`);
    if (!response.ok) {
      showResult("Falha no serviço", "error");
    } else {
      const data = await response.json();
      if (data.erro) {
        showResult("CEP não encontrado", "error");
      } else {
        const message = `<p><strong>CEP:</strong> ${data.cep || "-"}</p>
                    <p><strong>Logradouro:</strong> ${data.logradouro || "-"}</p>
                    <p><strong>Complemento:</strong> ${data.complemento || "-"}</p>
                    <p><strong>Bairro:</strong> ${data.bairro || "-"}</p>
                    <p><strong>Cidade:</strong> ${data.cidade || "-"}</p>
                    <p><strong>UF:</strong> ${data.uf || "-"}</p>
                    <p><strong>Estado:</strong> ${data.estado || "-"}</p>
                    <p><strong>Região:</strong> ${data.regiao || "-"}</p>
                    <p><strong>DDD:</strong> ${data.ddd || "-"}</p>`;
        showResult(message, "success");
      }
    }
  }
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleSearch();
  }
});

input.addEventListener("input", function () {
  if (input.value.trim() === "") {
    result.innerHTML = "";
    result.className = "result";
  }
});
