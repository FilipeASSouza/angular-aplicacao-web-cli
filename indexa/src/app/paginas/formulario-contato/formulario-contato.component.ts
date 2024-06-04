import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoService } from '../../services/contato.service';
import { MensagemErroComponent } from '../../componentes/mensagem-erro/mensagem-erro.component';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
    RouterLink,
    MensagemErroComponent
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})

export class FormularioContatoComponent implements OnInit{

  contatoForm!: FormGroup;

  constructor(
    private contatoService :ContatoService,
    private router :Router,
    private activatedRoute:ActivatedRoute
  ){

  }

  ngOnInit(){
    this.inicializarFormulario();
    this.carregarContato();
  }

  inicializarFormulario(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      avatar: new FormControl('', Validators.required),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    });
  }

  obterControle(nome:string):FormControl{
    const control = this.contatoForm.get(nome);
    if(!control){
      throw new Error('Controle de formulário não encontrado:' + nome);
    }
    return control as FormControl;
  }

  carregarContato(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) =>{
        //pode ser utilizado em conjunto com o formGroup para atualizar o formulario
        this.contatoForm.patchValue(contato);
      });
    }
  }

  salvarContato(){
    const novoContato = this.contatoForm.value;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    novoContato.id = id ? parseInt(id) : null;

    this.contatoService.editarOuSalvarContato(novoContato).subscribe(() => {
      this.contatoForm.reset();
      this.router.navigateByUrl('/lista-contatos');
    });
    
    /*if(this.contatoForm.valid){
      console.log(this.contatoForm.value);
      console.log(this.contatoForm.get('email')?.errors);//esse interrorgação é para informar ao typescript que é seguro
    }*/
  }

  aoSelecionarArquivo(event:any){
    const file:File = event.target.files[0];
    if(file){
      this.lerArquivo(file);
    }
  }

  lerArquivo(file:File){
    //instancia que vai ser responsavel por fazer essa leitura
    const reader = new FileReader();
    //onload significa quando esse arquivo for carregado o que queremos que aconteça
    reader.onload = () => {
      if(reader.result){
        //na linha 93 foi setado o resultado na propriedade avatar
        this.contatoForm.get('avatar')?.setValue(reader.result)
      }
    }
    //conversão em Base64 para string
    reader.readAsDataURL(file);
  }

  cancelar() {
    this.contatoForm.reset();
    this.router.navigateByUrl('/lista-contatos');
    //console.log('Cancelado!');
  }

}
