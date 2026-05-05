export class QuitandaController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.addProdutoBtn.addEventListener("click", () => this.addProduto());
    this.view.venderProdutoBtn.addEventListener("click", () =>
      this.venderProduto(),
    );

    this.updateView();
  }

  addProduto() {
    const nome = this.view.getNomeInput();
    const categoria = this.view.getCategoriaInput();
    const preco = this.view.getPrecoInput();
    const quantidade = this.view.getQuantidadeInput();

    const resultado = this.model.addProduto(nome, categoria, preco, quantidade);

    if (resultado.erro) {
      this.view.showMensagem(resultado.erro);
      return;
    }

    this.view.clearMensagem();
    this.view.clearInputs();
    this.updateView();
  }

  venderProduto() {
    const id = this.view.getIdVendaInput();
    const quantidade = this.view.getQuantidadeVendaInput();

    const resultado = this.model.venderProduto(id, quantidade);

    if (resultado.erro) {
      this.view.showMensagem(resultado.erro);
      return;
    }

    this.view.clearMensagem();
    this.updateView();
  }

  removerProduto(id) {
    this.model.removeProduto(id);
    this.updateView();
  }

  updateView() {
    this.view.renderProdutos(this.model.getProdutos(), (id) =>
      this.removerProduto(id),
    );

    this.view.renderMovimentacoes(this.model.getMovimentacoes());
  }
}
