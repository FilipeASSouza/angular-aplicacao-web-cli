import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ContainerComponent } from '../../componentes/container/container.component';
import { Contato } from '../../componentes/contato/contato';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    RouterLink
  ],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit{

  contato: Contato = {
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: ''
  }
  //servico ActivatedRoute
  constructor(
    private activatedRoute:ActivatedRoute,
    private contatoService:ContatoService
  ){ }

  ngOnInit(): void {
    //captura instantanea das informações da rota no exato momento
    //paramMap recupera o valor de um parametro especifico
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) =>{
        this.contato = contato;
      });
    }
  }
}
