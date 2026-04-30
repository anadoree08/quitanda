// classe controller para interação entre model e view

export class QuitandaController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  // função que roda no início do sistema
  init() {
    // evento para adicionar produto
    this.view.addProdutoBtn.addEventListener("click", () => this.addProduto());

    // evento para vender produto
    this.view.venderProdutoBtn.addEventListener("click", () =>
      this.venderProduto(),
    );

    // render inicial
    this.updateView();
  }

  // =========================
  // adicionar produto
  addProduto() {
    const nome = this.view.getNomeInput();
    const categoria = this.view.getCategoriaInput();
    const preco = this.view.getPrecoInput();
    const quantidade = this.view.getQuantidadeInput();

    if (nome === "") {
      this.view.showMensagem("Nome do produto não pode ser vazio.");
      return;
    }

    this.view.clearMensagem();

    this.model.addProduto(nome, categoria, preco, quantidade);

    this.view.clearInputs();
    this.updateView();
  }

  // =========================
  // vender produto
  venderProduto() {
    const id = this.view.getIdVendaInput();
    const quantidade = this.view.getQuantidadeVendaInput();

    this.model.venderProduto(id, quantidade);
    this.updateView();
  }

  // =========================
  // remover produto
  removerProduto(id) {
    this.model.removeProduto(id);
    this.updateView();
  }

  // =========================
  // atualizar tela
  updateView() {
    this.view.renderProdutos(this.model.getProdutos(), (id) =>
      this.removerProduto(id),
    );

    this.view.renderMovimentacoes(this.model.getMovimentacoes());
  }
}
