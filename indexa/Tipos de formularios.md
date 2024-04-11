# Para saber mais: formulários orientados a dados ou a template?

Imagine que você está desenvolvendo um formulário de cadastro para uma aplicação Angular e precisa validar os dados inseridos pelas pessoas usuárias, como nome, e-mail, senha, etc. Você também quer ter um controle mais detalhado sobre o comportamento do formulário, como habilitar ou desabilitar botões, mostrar ou ocultar mensagens de erro, etc.

Quais são as opções que o Angular oferece para trabalhar com formulários e qual é a melhor escolha para o seu caso?

Para solucionar essas questões, precisamos analisar os dois tipos de formulários que o Angular nos fornece: template driven(orientados a template) e data driven(orientados a dados).

Os formulários template driven são criados e configurados no arquivo HTML do componente, ou seja, no template, usando a diretiva [(ngModel)] para fazer o two-way data binding , o que permite a sincronização entre o template e o componente, fazendo a atualização bidirecional em tempo real. As validações também são incluídas no template. Os valores do formulário são submetidos através da diretiva (ngSubmit). Para implementar esse tipo de formulário, é necessário importar o módulo FormsModule. Observe um exemplo de formulário template driven a seguir:

No template do formulário:

<form #form="ngForm" (ngSubmit)="cadastrar(form)">
  <div>
    <label for="name">Nome:</label>
    <input id="name" name="name" type="text" required minlength="3" ngModel>
    @if (form.controls['name']?.errors?.['required'] && form.controls['name']?.['touched']) {
      <div>O nome é obrigatório.</div>
    }
  </div>
  <button type="submit" [disabled]="form.invalid">Cadastrar</button>
</form>

No component:


import { Component} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

// interface que representa os dados do usuário
interface User {
  name: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent{

    // propriedade que armazena os dados do formulário
    user: User = {
      name: ''
    };
    
    constructor() { }

    // método que é chamado quando o formulário é submetido
    cadastrar(form: NgForm) {
      // verifica se o formulário é válido
      if (form.valid) {
        // exibe um alerta de formulário válido
        alert('Formulário válido')
      } else {
        // exibe um alerta de formulário inválido
        alert('Formulário inválido');
      }
    }

}

Já os formulários data driven (ou reativos) são criados e configurados no arquivo typescript do componente, usando objetos FormGroup e FormControl para representar o formulário e seus campos. As validações são feitas no componente, usando classes Validators ou funções personalizadas. Os valores do formulário podem ser acessados diretamente pelo componente, sem precisar do (ngSubmit). Para implementar esse tipo de formulário, é necessário importar o módulo ReactiveFormsModule. Observe um exemplo de formulário data driven a seguir:

No template do formulário:

<form [formGroup]="formulario" (ngSubmit)="cadastrar()">
  <div>
    <label for="name">Nome:</label>
    <input id="name" name="name" type="text" formControlName="name">
    @if (formulario.get('nome')?.errors && formulario.get('nome')?.touched) {
      <div>O nome é obrigatório.</div>
    }
  </div>
  <button type="submit" [disabled]="formulario.invalid">Cadastrar</button>
</form>


No component:

import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reativo',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './form-reativo.component.html',
  styleUrl: './form-reativo.component.css'
})
export class FormReativoComponent {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  cadastrar(){
    // verifica se o formulário é válido
    if (this.formulario.valid) {
      // exibe um alerta de formulário válido
      alert('Formulário válido')
    } else {
      // exibe um alerta de formulário inválido
      alert('Formulário inválido');
    }
  }

}

Mas qual deles utilizar?
Os formulários reativos oferecem algumas vantagens em relação aos formulários template driven, como:

Controle detalhado: permitem um controle mais preciso sobre o comportamento do formulário e dos dados. Isso pode ser especialmente útil em formulários complexos, onde você precisa de mais controle sobre a validação ou quando você está trabalhando com dados dinâmicos.

Testes: são geralmente mais fáceis de testar, porque você tem acesso direto aos dados do formulário e pode manipulá-los diretamente em seus testes.

Performance: em grandes formulários, os formulários reativos podem oferecer melhor desempenho, porque eles não exigem a criação de tantos objetos de controle.

Organização do código: os formulários template driven costumam trazer um código HTML muito “poluído” quando existem formulários muito grandes e/ou com muitas validações, o que implica na dificuldade de manutenção e organização de código.

No entanto, existem ocasiões em que a complexidade dos formulários reativos é dispensável e um formulário orientado a template é suficiente para resolver o problema de formulário. Assim é necessário analisar o contexto e avaliar a melhor opção.

Caso queira saber mais sobre as diferenças entre os formulários reativos e os formulários template driven, você pode consultar os seguintes conteúdos:

# Como aplicar validação em formulários reativos no Angular?

https://www.alura.com.br/artigos/como-aplicar-validacao-formularios-reativos-angular?_gl=1*1ryahif*_ga*MTU4NzgwMTU5Mi4xNjk4MzQyNTk1*_ga_1EPWSW3PCS*MTcxMjg0NzUzOC4xNDguMS4xNzEyODQ3OTc4LjAuMC4w*_fplc*c0c5ZXpkMHJtJTJGbjhCdmxsciUyRlNEcFExNDRuYXFZSUdhVHBaQXlDVU50b0g5JTJCMXZHWXBhaUhXejZ0ZmMlMkJ0aFVTMFBidDkzWXFxVCUyRmNvJTJCb0paSThwWmd4ckhVZVNEWDM3S1VWJTJCaGR3YnZ3NHNHdk1odkhZdVlrcGhRZHdaeXclM0QlM0Q.

# Curso Angular: formulários orientados a templates

https://cursos.alura.com.br/course/angular-formularios-orientados-templates