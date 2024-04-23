Para entender como o Angular facilita a comunicação entre o template (a parte visual da aplicação que o usuário vê) e a classe do componente (onde fica a lógica do componente), precisamos falar sobre um recurso muito poderoso chamado "binding", que em uma tradução livre, significa "vinculação". No contexto do Angular, é a forma de conectar os dados e eventos da classe do componente com a representação visual no template.

# O que é Data Binding?
Data Binding é o processo pelo qual o Angular sincroniza os dados entre o modelo (a classe do componente) e a view (o template). Existem quatro formas principais de Data Binding no Angular:

# Interpolação ({{ valor }}): 
usa-se para exibir propriedades da classe do componente no template.

# Property Binding ([propriedade]="valor"): 
usa-se para vincular uma propriedade de um elemento HTML a uma propriedade da classe do componente.

# Event Binding ((evento)="handler()"): 
permite ouvir eventos do DOM e reagir a eles na classe do componente.

# Two-way Binding ([(ngModel)]="propriedade"): 
combina Property e Event Binding para criar uma via de mão dupla entre a classe e o template.
Event Binding. Quando falamos de Event Binding, estamos falando da capacidade de responder a eventos do usuário, como cliques, movimentos do mouse, toques na tela, pressionamentos de tecla, etc. No Angular, podemos vincular esses eventos a métodos que definimos na nossa classe de componente, como você pode observar no exemplo a seguir:

<button (click)="clicouNoBotao()">Clique Aqui!</button>

export class MeuComponente {
  clicouNoBotao() {
    alert('Você clicou no botão!');
  }
}

No exemplo acima, quando o usuário clica no botão, o método clicouNoBotao() é chamado.

# Porque precisamos do Event Binding?
Usamos o Event Binding para criar aplicações interativas. Sem ele, não seria possível reagir às ações do usuário. Com Event Binding, é possível criar uma experiência dinâmica e reativa.

Mas existem outros tipos de Data Binding, que vamos conhecer a seguir. Contudo, se quiser conhecer um pouco mais a fundo sobre eles, sugiro que faça o curso Angular: construa uma aplicação web com componentes, linguagem de template e CLI

# Outros tipos de Data Binding

Interpolação
<p>Olá, {{ nomeUsuario }}!</p>

export class MeuComponente {
  nomeUsuario = 'Alice';
}

No exemplo acima, {{ nomeUsuario }} é substituído pelo valor da propriedade nomeUsuario da classe do componente.

# Property Binding
<img [src]="urlDaImagem">

export class MeuComponente {
  urlDaImagem = 'http://meusite.com/imagem.png';
}

No exemplo acima, a propriedade src do elemento img é vinculada à propriedade urlDaImagem da classe do componente.

# Two-way Binding
<input [(ngModel)]="nomeUsuario">

export class MeuComponente {
  nomeUsuario: string;
}

No exemplo acima, o valor do campo de entrada é vinculado à propriedade nomeUsuario. Qualquer alteração no campo de entrada atualiza a propriedade e vice-versa.