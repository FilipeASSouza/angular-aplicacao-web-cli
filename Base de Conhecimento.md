# Link do Figma

1º
https://www.figma.com/file/uXjoavDEvDjyE8LsXgliGx/Indexa-%7C-Angular---Primeiros-Passos?type=design&node-id=56-151029&mode=design&t=lg6FDUeyGRjS0nLt-0

2º
https://www.figma.com/design/uXjoavDEvDjyE8LsXgliGx/Indexa-%7C-Angular---Primeiros-Passos?node-id=320-7053&t=SF35XB3mJH1LFzfb-0

# Instalando angular/CLI

npm install -g @angular/cli@17.0.3

# Iniciando projeto angular/CLI

dentro da pasta do projeto depois de instalado, execute o comando

ng serve

# Criando o projeto

ng new 'nome do projeto'

# Criando component

ng generate component 'caminho e nome do component ex: componentes/container'

ng g c 'caminho e nome do component ex: componentes/container'

# Link documentação oficial angula

https://angular.dev/reference/releases

Importante!!

Uma dica sobre o ciclo de lançamentos do Angular: esperem uma nova versão principal a cada seis meses. Além disso, cada grande atualização, geralmente, vem acompanhada de 1 a 3 lançamentos menores, para aprimorar e ajustar as novidades. E tem mais: quase toda semana temos um patch ou um build pré-lançamento, como o 'next' ou 'rc'.

# Migrations guide

https://update.angular.io/?v=16.0-17.0

Importante!!

Outra jogada de mestre é usar os migration guides. Eles são como os GPSs do desenvolvimento de software. Quer migrar sua aplicação de uma versão para outra? Os migration guides mostram o caminho, evitando os buracos e garantindo uma viagem tranquila.

# Ajustando tsconfig.json angula

propriedade resolveJsonModule estando true, auxilia para interpletar o arquivo json que está sendo utilizado na aplicação.

# Continuacao do curso

https://www.figma.com/file/uXjoavDEvDjyE8LsXgliGx/Indexa-%7C-Angular---Primeiros-Passos?type=design&node-id=241-4472&mode=design

# Informação tipos de formulários angular

Tipo de formulário reativo, orientado a dados.
Tipo de formulário orientado a templates.

# Services e injeção de dependência no Angular: o que são e como funcionam?

https://www.alura.com.br/artigos/services-injecao-dependencia-angular-o-que-sao-como-funcionam?_gl=1*ju1e3v*_ga*MTU4NzgwMTU5Mi4xNjk4MzQyNTk1*_ga_1EPWSW3PCS*MTcxNjgyOTQxMC4xODEuMS4xNzE2ODI5OTQ5LjAuMC4w*_fplc*SWR6a1lUZnhDTEpVQzZUVGdTMHhYS3NGU0JSRiUyRm9vVllYVURJN2dEMHFSMHRnTkxxa0pKZHZpUm42Ukoyc3JVYVlIbGlzM083Ynh4bDV4d0g3QkJSRHcyU0VmSWliWnRNdXp6MEVBTVk1cXJZbFVYUWY3UXM3UCUyQnhyUnlWUSUzRCUzRA..

# Instalando JSON server

# 1º Passo: Comando para criar o arquivo de configuração da aplicação JSON

npm init -y

Observação: o arquivo irá ser utilizado para dar o start na aplicação.

# 2º Passo: executar o comando abaixo para instalar o JSON Server

npm i -g json-server@0.17.4

# Iniciando o json-server

na pasta do backend digite

npm start