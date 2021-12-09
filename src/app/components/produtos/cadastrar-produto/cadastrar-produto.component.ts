import { JogosService } from './../../../services/jogos.service';
import { IJogos } from '../../../model/IJogos.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  jogo: IJogos = {
    titulo: '',
    desenvolvedor: '',
    dataLancamento: new Date(),
    preco: 0,
    card: ''
  };


  constructor(private JogosService: JogosService, private router: Router) { }

  ngOnInit(): void {
  }

    salvarProdutos(): void {
      this.JogosService.cadastrarProduto(this.jogo).subscribe(retorno => {
        this.jogo = retorno;
        this.JogosService.exibirMensagem(
          'Sistema',
          `${this.jogo.titulo} foi cadastrado com sucesso. ID: ${this.jogo.id}`,
          'toast-success',
        );
        this.router.navigate(['/produtos']);
      });
    }
}
