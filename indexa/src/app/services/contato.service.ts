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
    return this.http.post<Contato>(this.API, contato);
   }

   buscarPorId(id:Number) :Observable<Contato> {
    
      const url = `${this.API}/${id}`;
      return this.http.get<Contato>(url);
   }

   excluirContato(id:Number) :Observable<Contato> {
    
    const url = `${this.API}/${id}`;
    return this.http.delete<Contato>(url);
   }
   
   editarContato(contato:Contato) :Observable<Contato> {
    
    const url = `${this.API}/${contato.id}`;
    return this.http.put<Contato>(url, contato);
   }

   editarOuSalvarContato(contato:Contato) :Observable<Contato>{
    if(contato.id){
      return this.editarContato(contato);
    }else{
      return this.salvarContato(contato);
    }
   }
}
