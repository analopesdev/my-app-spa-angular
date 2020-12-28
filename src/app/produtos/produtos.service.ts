import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from './produto';
import { Observable } from "rxjs";

//  Com o injectable o angular passa a entender ele como um tipo de serviço que você possa injetar em algum lugar
@Injectable()
export class ProdutoService {
  constructor(private http: HttpClient){}

  protected UrlServiceV1: string = "http://localhost:3000/";

  //  Observable é a promessa
  obterProdutos() : Observable<Produto[]>{
    return this.http
    .get<Produto[]>(this.UrlServiceV1 + "produtos");
  }
}