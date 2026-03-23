### 📱 Agenda de Contatos - Angular (CRUD Completo)

Aplicação desenvolvida em Angular para gerenciamento de contatos, com funcionalidades completas de CRUD, integração com API REST, upload de imagem e navegação dinâmica.

💡 O projeto demonstra evolução real de um sistema frontend moderno, com foco em boas práticas, arquitetura e experiência do usuário.

### 🚀 Tecnologias utilizadas
### 🧩 Frontend
- Angular 16 — Framework principal para construção da aplicação
- TypeScript — Tipagem estática e maior segurança no desenvolvimento
- HTML5 + CSS3 — Estrutura e estilização da interface
- Angular CLI — Gerenciamento e build do projeto

### ⚡ Programação reativa
- RxJS — Manipulação de dados assíncronos com Observables
- HttpClient — Consumo de API REST
- 🧾 Formulários
- Reactive Forms — Controle avançado de formulários
- Validações customizadas — Regras de negócio aplicadas ao formulário

### 🌐 Backend (simulado)
- json-server — API REST fake para simulação de backend

### 💾 Persistência de dados
- LocalStorage — Armazenamento local no navegador
- Sincronização com API REST

### 🎨 UI/UX
- CSS customizado
- Material Icons — Ícones da interface
- Componentização — Reutilização de elementos visuais

### 🧱 Arquitetura e padrões
- Component-based architecture
- Separation of Concerns (SoC)
- Service Layer Pattern
- Routing Module (SPA)

### 🛠️ Ferramentas e ambiente
- Node.js
- npm
- Git & GitHub

### 📌 Sobre o projeto

A aplicação permite:

- 📇 Listar contatos
- ➕ Adicionar novos contatos
- ✏️ Editar contatos
- ❌ Remover contatos
- 🔍 Filtrar contatos
- 🖼️ Adicionar avatar (imagem)
- 💾 Persistir dados (API + localStorage)

### 🧠 Principais conceitos aplicados
### ⚡ Angular
- Componentização
- Data Binding e Event Binding
- Diretivas (*ngFor, *ngIf, ngClass)
- Rotas com parâmetros dinâmicos
- Injeção de dependência (DI)
- Ciclo de vida (OnInit)

### 🔁 Programação reativa
- Uso de Observable
- Consumo de API REST
- Integração com HttpClient

### 🧾 Formulários reativos
- Reactive Forms (FormGroup)
- Validações customizadas
- patchValue
- Feedback visual de erro
- Controle de estado do formulário

### 🛠️ Funcionalidades
### 📇 Lista de contatos
- Renderização dinâmica
- Navegação para detalhes
- Filtro por texto (com remoção de acentos)

### ➕ Cadastro de contato
- Formulário reativo
- Validação de campos (ex: email)
- Feedback visual com componente de erro

### ✏️ Edição de contato
- Rota dinâmica com parâmetro (id)
- Carregamento de dados com ActivatedRoute
- Reutilização do formulário (editar/salvar)

### ❌ Exclusão
- Remoção de contato por ID
- Integração com service

### 🖼️ Upload de imagem (Avatar)
- Leitura de arquivo
- Conversão para Base64
- Exibição da imagem no formulário
- Persistência do avatar

### 🌐 Integração com API
- API REST simulada com json-server

### Métodos:
- GET (listar / buscar por id)
- POST (salvar)
- PUT (editar)
- DELETE (remover)

### 💾 Persistência
- Uso de localStorage
- Sincronização com API
- Service dedicado para manipulação dos dados

### 🎨 Interface
- Estilização customizada com CSS
- Componentes reutilizáveis:
- Cabeçalho
- Lista de contatos
- Perfil do contato
- Formulário
- Mensagens de erro
- Uso de Material Icons

### 🧩 Arquitetura

Organização baseada em separação de responsabilidades: <br/>
 <br/>
Components → UI e interação <br/>
Services → Regras e acesso a dados <br/>
Models → Estrutura de dados <br/>
Routing → Navegação da aplicação <br/>

### ⚙️ Estrutura do projeto <br/>
📦 agenda-contatos <br/>
 ┣ 📂 src <br/>
 ┃ ┣ 📂 app <br/>
 ┃ ┃ ┣ 📂 components <br/>
 ┃ ┃ ┣ 📂 services <br/>
 ┃ ┃ ┣ 📂 pages <br/>
 ┃ ┃ ┗ 📂 models <br/>
 ┃ ┣ 📂 assets <br/>
 ┃ ┗ 📂 styles <br/>
 ┣ 📜 angular.json <br/>
 ┣ 📜 package.json <br/>
 ┗ 📜 README.md <br/>

### ⚙️ Como executar
### Clonar repositório
git clone https://github.com/FilipeASSouza/angular-aplicacao-web-cli.git

### Acessar pasta
cd angular-aplicacao-web-cli

### Instalar dependências
npm install

### Subir API fake (json-server)
npx json-server --watch db.json

### Rodar aplicação
ng serve

### Acessar
http://localhost:4200

### 📈 Evolução do projeto (baseado nos commits)
### 🔰 Início (Fev - Mar 2024)
- Criação do projeto Angular
- Componentes base (container, cabeçalho)
- Estrutura inicial

### 📇 Listagem e UI (Mar - Abr 2024)
- Componentes de contato
- Iteração com *ngFor
- Estilização da interface

### 🔍 Funcionalidades (Abr 2024)
- Filtro de contatos
- Data binding e event binding
- Organização do código

### 🧾 Formulários (Mai 2024)
- Formulário reativo
- Validações
- Feedback visual

### 🧭 Navegação (Mai 2024)
- Rotas
- Parâmetros dinâmicos
- Navegação entre páginas

### 🌐 Integração API (Mai 2024)
- json-server
- HttpClient + Observable
- CRUD completo

### 🖼️ Recursos avançados (Jun 2024)
- Upload de imagem (Base64)
- Avatar do contato
- Melhorias de UX/UI

### 🧼 Refatoração e melhorias
- Separação de responsabilidades
- Componentização
- Código mais limpo e reutilizável

### 🧪 Base de conhecimento aplicada

Durante o projeto foram explorados:

- Angular Forms
- Observables e reatividade
- Manipulação de rotas
- Boas práticas de frontend
- Estruturação de aplicações escaláveis

### 🚧 Próximos passos
- Autenticação de usuário
- Integração com backend real
- Testes automatizados
- Deploy

### 👨‍💻 Autor

Desenvolvido por Filipe Souza

### 💡 Observação

Este projeto demonstra:

- Evolução real baseada em commits
- Domínio de Angular moderno
- Integração com API
- Construção de CRUD completo
