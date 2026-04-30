//classe para organização da interface da aplicação e interação com o html

export class QuitandaView {
  constructor() {
    // inputs de cadastro
    this.nomeInput = document.getElementById("nomeInput");
    this.categoriaInput = document.getElementById("categoriaInput");
    this.precoInput = document.getElementById("precoInput");
    this.quantidadeInput = document.getElementById("quantidadeInput");

    this.addProdutoBtn = document.getElementById("addProdutoBtn");

    // inputs de venda
    this.idVendaInput = document.getElementById("idVendaInput");
    this.quantidadeVendaInput = document.getElementById("quantidadeVendaInput");
    this.venderProdutoBtn = document.getElementById("venderProdutoBtn");

    // listas
    this.listaProdutos = document.getElementById("listaProdutos");
    this.listaMovimentacoes = document.getElementById("listaMovimentacoes");

    // mensagem
    this.mensagem = document.getElementById("mensagem");
  }

  // =========================
  // pegar valores dos inputs

  getNomeInput() {
    return this.nomeInput.value.trim();
  }

  getCategoriaInput() {
    return this.categoriaInput.value.trim();
  }

  getPrecoInput() {
    return parseFloat(this.precoInput.value);
  }

  getQuantidadeInput() {
    return parseInt(this.quantidadeInput.value);
  }

  getIdVendaInput() {
    return parseInt(this.idVendaInput.value);
  }

  getQuantidadeVendaInput() {
    return parseInt(this.quantidadeVendaInput.value);
  }

  // =========================
  // limpar inputs

  clearInputs() {
    this.nomeInput.value = "";
    this.categoriaInput.value = "";
    this.precoInput.value = "";
    this.quantidadeInput.value = "";
  }

  // =========================
  // mensagens

  showMensagem(texto) {
    this.mensagem.textContent = texto;
  }

  clearMensagem() {
    this.mensagem.textContent = "";
  }

  // =========================
  // renderizar produtos

  renderProdutos(produtos, remover) {
    this.listaProdutos.innerHTML = "";

    produtos.forEach((produto) => {
      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent =
        produto.id +
        " | " +
        produto.nome +
        " | " +
        produto.categoria +
        " | R$ " +
        produto.preco +
        " | Qtd: " +
        produto.quantidade;

      const action = document.createElement("div");

      const removerBtn = document.createElement("button");
      removerBtn.textContent = "Remover";
      removerBtn.addEventListener("click", () => remover(produto.id));

      action.appendChild(removerBtn);

      li.appendChild(span);
      li.appendChild(action);

      this.listaProdutos.appendChild(li);
    });
  }

  // =========================
  // renderizar movimentações

  renderMovimentacoes(movimentacoes) {
    this.listaMovimentacoes.innerHTML = "";

    movimentacoes.forEach((mov) => {
      const li = document.createElement("li");

      li.textContent =
        mov.tipo + " - " + mov.produto + " (Qtd: " + mov.quantidade + ")";

      this.listaMovimentacoes.appendChild(li);
    });
  }
}
