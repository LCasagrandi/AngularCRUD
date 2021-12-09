import { IJogos } from '../model/IJogos.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JogosService {

  private URL: string = 'http://localhost:3000/jogos';

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  buscarTodos(): Observable<IJogos[]>{
    return this.http.get<IJogos[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  buscarPorId(id: number): Observable<IJogos>{
    return this.http.get<IJogos>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  cadastrarProduto(produto: IJogos): Observable<IJogos> {
    return this.http.post<IJogos>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  atualizarProduto(produto: IJogos): Observable<IJogos> {
    return this.http.put<IJogos>(`${this.URL}/${produto.id}`, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  excluirProduto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  exibirErro(erro: any): Observable<any> {
    this.exibirMensagem('Erro!', 'Não foi possível realizar a operação', 'toast-error')
    return EMPTY
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);
  }
}
