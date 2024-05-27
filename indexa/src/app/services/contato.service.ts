import { Injectable } from '@angular/core';

interface Contato {
  id:number
  nome:string
  telefone:string
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos :Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420"},
    {"id": 2, "nome": "Ágata", "telefone": "38 128451235"},
    {"id": 3, "nome": "Bruno", "telefone": "95 695521583"},
    {"id": 4, "nome": "Beatriz", "telefone": "25 854986459"},
    {"id": 5, "nome": "Carlos", "telefone": "94 543197849"},
    {"id": 6, "nome": "Daniel", "telefone": "56 613692441"},
  ];

  constructor() {
    //Tenta obter os dados do localstorage

    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    this.contatos = contatosLocalStorage || this.contatos;

    //Salvar os contatos no localstorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));

   }

   obterContatos(){
    return this.contatos;
   }

   salvarContato(contato :Contato){
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
   }

   /*
   Armazenadores de dados do navegador - LocalStorage
   https://www.alura.com.br/artigos/armazenadores-de-dados-do-navegador?_gl=1*70xkiz*_ga*MTU4NzgwMTU5Mi4xNjk4MzQyNTk1*_ga_1EPWSW3PCS*MTcxNjgxNjEzMS4xNzkuMS4xNzE2ODE2ODE2LjAuMC4w*_fplc*SWR6a1lUZnhDTEpVQzZUVGdTMHhYS3NGU0JSRiUyRm9vVllYVURJN2dEMHFSMHRnTkxxa0pKZHZpUm42Ukoyc3JVYVlIbGlzM083Ynh4bDV4d0g3QkJSRHcyU0VmSWliWnRNdXp6MEVBTVk1cXJZbFVYUWY3UXM3UCUyQnhyUnlWUSUzRCUzRA..
   
   Curso para praticar
   https://cursos.alura.com.br/course/javascript-manipulando-objetos
   */
}
