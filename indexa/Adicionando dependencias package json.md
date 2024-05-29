{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "json-server --watch db.json --port 3000"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies":{
    "json-server":"^0.17.4"
  }
}

# Observações:

Ao colocar "^" dentro da versão, ele não ira baixar as versões 1.*.*, apenas as versões 0.*.*.

# Instalando as dependencias

Basta ir no terminal do backend e digitar: 

npm i

Depois disso pode ser executado o comando abaixo para verificar a versão instalada json-server

json-server -version

