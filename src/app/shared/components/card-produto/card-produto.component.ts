import { Router } from '@angular/router';
import { IJogos } from './../../../model/IJogos.model';
import { JogosService } from './../../../services/jogos.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  listaJogos: IJogos[] = [];
  @Input() nome: string = '';
  @Input() precoProduto: number = 0;
  @Input() card: string = '';
  @Input() validade: string = '';
  @Input() id: number = 0;
  @Input() promocao: boolean = true;
  @Input() listaProdutos: any = [];

  constructor(private JogosService: JogosService, private router: Router) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void{
    this.JogosService.buscarTodos().subscribe(retorno => {
      this.listaJogos = retorno
    })
  }
}
