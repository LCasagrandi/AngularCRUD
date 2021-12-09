import { IJogos } from '../../../model/IJogos.model';
import { JogosService } from '../../../services/jogos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

    listaJogos: IJogos[] = [];

  constructor(private jogosService: JogosService, private router: Router) {

   }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void{
    this.jogosService.buscarTodos().subscribe(retorno => {
      this.listaJogos = retorno
    })
  }

  deletar(produto: IJogos): void {
    this.jogosService.excluirProduto(produto.id!).subscribe(retorno => {this.listaJogos = retorno})

    this.jogosService.exibirMensagem(
      'Sistema',
      `${produto.titulo} foi excluído com sucesso.`,
      'toast-success',
    );
    this.carregarProdutos();
  }
}
