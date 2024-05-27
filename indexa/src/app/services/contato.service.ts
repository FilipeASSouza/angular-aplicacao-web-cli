import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contato } from '../componentes/contato/contato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  //criando constante com o link da url
  private readonly API = 'http://localhost:3000/contatos';

  constructor(private http :HttpClient) {  }

   obterContatos() :Observable<Contato[]>{
    //tipando o tipo como generico
    return this.http.get<Contato[]>(this.API);
   }

   salvarContato(contato :Contato){
    
   }
}
