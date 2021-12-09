import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  angularCard: string = 'assets/img/crud.png';
  ionicCard: string = 'assets/img/ionicCard.png';
  designCard: string = 'assets/img/designCard.jpg';
  designACard: string = 'assets/img/designACard.jpg';
  kotlinCard: string = 'assets/img/kotlinCard.jpg';
  uiCard: string = 'assets/img/uiCard.png';
  uxCard: string = 'assets/img/uxCard.png';

  listaProdutos: any = [
    {nome: 'Curso de Angular', card: this.angularCard ,precoProduto: 35.99, validade:'2021-12-31', id: 1},
    {nome: 'Curso de Ionic', card: this.ionicCard, precoProduto: 49.99, validade:'2021-12-31', promocao:true, id: 2},
    {nome: 'Curso de Design', card: this.designCard, precoProduto: 39.99, validade:'2021-12-31', id: 3},
    {nome: 'Curso de Design Avançado', card: this.designACard, precoProduto: 49.99, validade:'2021-12-31', id: 4},
    {nome: 'Curso de Kotlin', card: this.kotlinCard, precoProduto: 29.99, validade:'2021-12-31', id: 5},
    {nome: 'Curso de U.I.', card: this.uiCard, precoProduto: 39.99, validade:'2021-12-31', id: 6},
    {nome: 'Curso de U.X.', card: this.uxCard, precoProduto: 39.99, validade:'2021-12-31', id: 7},

];

  promocao: boolean = true;




  constructor() {

}
  ngOnInit(): void {
  }

}
