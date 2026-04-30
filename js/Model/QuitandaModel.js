//base da estrutura do aplicativo
//classe responsável pelos dados da quitanda

export class QuitandaModel {
  constructor() {
    this.produtos = []; // vetor de produtos
    this.movimentacoes = []; // vetor de movimentações
    this.currentId = 1; // contador de id
  }

 
  // CREATE - adicionar produto
  addProduto(nome, categoria, preco, quantidade) {
    const novoProduto = {
      id: this.currentId++,
      nome: nome,
      categoria: categoria,
      preco: preco,
      quantidade: quantidade,
    };

    this.produtos.push(novoProduto);
  }

  
  // READ - listar produtos
  getProdutos() {
    return this.produtos;

    if (nome === "" || preco < 0 || quantidade < 0) {
      return;
    }
  }

 
  // UPDATE - atualizar estoque (entrada)
  atualizarEstoque(id, quantidade) {
    const produto = this.produtos.find((p) => p.id === id);

    if (produto) {
      produto.quantidade += quantidade;

      // registra movimentação
      const mov = {
        tipo: "entrada",
        produto: produto.nome,
        quantidade: quantidade,
      };

      this.movimentacoes.push(mov);
    }
  }


  // VENDER produto
  venderProduto(id, quantidade) {
    const produto = this.produtos.find((p) => p.id === id);

    if (produto) {
      if (produto.quantidade >= quantidade) {
        produto.quantidade -= quantidade;

        // registra movimentação
        const mov = {
          tipo: "venda",
          produto: produto.nome,
          quantidade: quantidade,
        };

        this.movimentacoes.push(mov);
      }
    }
  }

  
  // READ - ver movimentações
  getMovimentacoes() {
    return this.movimentacoes;
  }

 
  // DELETE - remover produto
  removeProduto(id) {
    this.produtos = this.produtos.filter((p) => p.id !== id);
  }
}
