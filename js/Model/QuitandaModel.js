export class QuitandaModel {
  constructor() {
    this.produtos = [];
    this.movimentacoes = [];
    this.currentId = 1;
  }

  addProduto(nome, categoria, preco, quantidade) {
    if (!nome || preco < 0 || quantidade < 0) {
      return { erro: "Dados inválidos." };
    }

    const existe = this.produtos.find(
      (p) => p.nome.toLowerCase() === nome.toLowerCase(),
    );

    if (existe) {
      return { erro: "Produto já cadastrado." };
    }

    const novoProduto = {
      id: this.currentId++,
      nome,
      categoria,
      preco,
      quantidade,
    };

    this.produtos.push(novoProduto);

    this.movimentacoes.push({
      tipo: "entrada",
      produto: nome,
      quantidade,
    });

    return { sucesso: true };
  }

  getProdutos() {
    return this.produtos;
  }

  atualizarEstoque(id, quantidade) {
    const produto = this.produtos.find((p) => p.id === id);
    if (!produto) return;

    produto.quantidade += quantidade;

    this.movimentacoes.push({
      tipo: "entrada",
      produto: produto.nome,
      quantidade,
    });
  }

  venderProduto(id, quantidade) {
    const produto = this.produtos.find((p) => p.id === id);

    if (!produto) {
      return { erro: "Produto não encontrado." };
    }

    if (quantidade <= 0) {
      return { erro: "Quantidade inválida." };
    }

    if (produto.quantidade < quantidade) {
      return { erro: "Estoque insuficiente." };
    }

    produto.quantidade -= quantidade;

    this.movimentacoes.push({
      tipo: "saida",
      produto: produto.nome,
      quantidade,
    });

    return { sucesso: true };
  }

  getMovimentacoes() {
    return this.movimentacoes;
  }

  removeProduto(id) {
    this.produtos = this.produtos.filter((p) => p.id !== id);
  }
}
