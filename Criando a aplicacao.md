Então, que achou do primeiro contato com o Angular? Como vimos em aula, precisamos executar o seguinte comando para criar um novo projeto angular com o nome indexa:

ng new indexa

Vamos precisar responder duas perguntas:

? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
Não queremos Angular routing e vamos utilizar CSS. Lembre-se de executar esse comando dentro da pasta onde deseja deixar os arquivos do projeto. No meu caso, eu deixei no Desktop (área de trabalho). Ao final do comando, você vai ver uma mensagem parecida com essa:

CREATE indexa/README.md (1060 bytes)
CREATE indexa/.editorconfig (274 bytes)
CREATE indexa/.gitignore (548 bytes)
CREATE indexa/angular.json (2700 bytes)
CREATE indexa/package.json (1037 bytes)
CREATE indexa/tsconfig.json (901 bytes)
CREATE indexa/tsconfig.app.json (263 bytes)
CREATE indexa/tsconfig.spec.json (273 bytes)
CREATE indexa/.vscode/extensions.json (130 bytes)
CREATE indexa/.vscode/launch.json (474 bytes)
CREATE indexa/.vscode/tasks.json (938 bytes)
CREATE indexa/src/favicon.ico (948 bytes)
CREATE indexa/src/index.html (292 bytes)
CREATE indexa/src/main.ts (214 bytes)
CREATE indexa/src/styles.css (80 bytes)
CREATE indexa/src/assets/.gitkeep (0 bytes)
CREATE indexa/src/app/app.module.ts (314 bytes)
CREATE indexa/src/app/app.component.css (0 bytes)
CREATE indexa/src/app/app.component.html (23083 bytes)
CREATE indexa/src/app/app.component.spec.ts (956 bytes)
CREATE indexa/src/app/app.component.ts (210 bytes)
✔ Packages installed successfully.
    Successfully initialized git.

Agora precisamos criar o componente. Basta entrar dentro da pasta do projeto e usar o ng-generate:

cd indexa/

ng generate component componentes/container

Depois de tudo pronto, podemos ajustar o src/app/app.component.html para contemplar o nosso componente recém-criado:

<app-container>
  <h1>Indexa</h1>
</app-container>

O src/app/app.component.ts para importar o componente recém-criado:

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

E os nossos estilos globais no src/styles.css:

body {
    background: linear-gradient(180deg, #3D8BFD 0%, #E7F1FF 100%);
    margin: 0;
    min-height: 100vh;
}

A gente pode acessar o Github e ver exatamente o que foi codado nessa aula