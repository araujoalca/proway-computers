import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})

export class CarrinhoService {
  //iniciando o carrinho com um vetor vazio
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  //Métodos do serviço carrinho

  obtemCarrinho () {
    //mostra a lista de itens

    // primeiro recupera a lista gravada em localStorage (cookie).
    // como a lista pode ser um item indefinido, colocamos "ou" uma string vazia
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    //adicionar produto ao carrinho
    this.itens.push(produto);

    //salvar o cookie LocalStorage
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  removerProdutoCarrinho(produtoId: number) {
    //filtrar e manter todos os produtos diferentes do produtoId
    this.itens = this.itens.filter(item => item.id !== produtoId);

    //remover também do localStoragem, sobreescrevendo-o com os itens do carrinho
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
}
