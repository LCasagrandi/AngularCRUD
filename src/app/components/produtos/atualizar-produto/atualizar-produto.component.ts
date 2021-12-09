import { JogosService } from './../../../services/jogos.service';
import { IJogos } from '../../../model/IJogos.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {

    jogo: IJogos = {
    titulo: '',
    desenvolvedor: '',
    dataLancamento: new Date(),
    preco: 0,
    card: ''
  };


  constructor(private jogosService: JogosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number (this.activatedRoute.snapshot.paramMap.get('id'));
    this.jogosService.buscarPorId(id).subscribe(retorno => {this.jogo = retorno})
  }

    salvarProdutos(): void {
      this.jogosService.atualizarProduto(this.jogo).subscribe(retorno => {
        this.jogo = retorno;
        this.jogosService.exibirMensagem(
          'Sistema',
          `${this.jogo.titulo} foi atualizado com sucesso. ID: ${this.jogo.id}`,
          'toast-success',
        );
        this.router.navigate(['/produtos']);
      });
    }
}

