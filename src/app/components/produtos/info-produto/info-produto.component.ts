import { IJogos } from './../../../model/IJogos.model';
import { JogosService } from './../../../services/jogos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-produto',
  templateUrl: './info-produto.component.html',
  styleUrls: ['./info-produto.component.css']
})
export class InfoProdutoComponent implements OnInit {

  jogo: IJogos = {
    titulo: '',
    desenvolvedor: '',
    dataLancamento: new Date(),
    preco: 0,
    card: '',

  };

  constructor(private jogosService: JogosService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const id = Number (this.activatedRoute.snapshot.paramMap.get('id'));
    this.jogosService.buscarPorId(id).subscribe(retorno => {this.jogo = retorno})
  }

  calmaLa(){

  this.jogosService.exibirMensagem(
    'Sistema',
    `${this.jogo.titulo} foi cadastrado com sucesso. ID: ${this.jogo.id}`,
    'toast-success',
  );
  }
}
