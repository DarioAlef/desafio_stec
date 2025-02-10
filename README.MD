# Obejtivo e treinamento
O desenvolvimento de um assistente virtual para desenvolvedores, sendo uma inteligência artificial para 
códigos. O Stec Coder é responsável por orientar, aprender e direcionar desenvolvedores, assim auxiliando 
em seus projetos e afazeres diários.

O Stec Coder será responsável pela integração orgânica entre desenvovledores, a IA terá ciência sobre o preojeto
que está sendo trabalhado, podendo auxilixar e atualizar em tempo real diferentes times.

Também será possível integrar desenvovledores da empresa cliente com a empresa vendedora, assim o time que está
desenvolvendo o projeto não precisará estar em constante comunição com o time de desenvolvedores da empresa compradora,
pois o Stec Coder será responsável manter coeso e atualizado todo o projeto e particularidades do desenvolvimento


# Inicializando o projeot -> no terminal:
1. npm init -y
2. npm install express cors dotenv axios nodemon
3. (in case don't have the path, create in "scripts", in package.json)  "dev": "nodemon server.js",
4. create .env file in the source of the project 
5. npm run dev
6. open index.html with the extensions live on server 


# .env 
o arquivo está visível no projeto para fins de facilitar o funcionamento do projeto em diferentes máquinas


# API com SATURN STUDIO
utilizei o express, cors e axios para poder criar um servidor node com requisições externas. 
    Ao capturar o prompt pela usuário, é feito uma requisição POST com a API externa, utilizando o 
    client_id e o project_id. Assim a mesagem enviada no site pelo usuário é enviada para a IA via cors
    e a resposta json é tratada pelo express


# Architecture: 
desafio_stec/
│
├── index.html               # Página principal
├── assets/                  
│   ├── images/              # Imagens usadas na landing page
│   │   └── logo.png         # logo do projeto
│   │   
│   ├── sounds/           
│   │   └── notification.mp3 # som futurista para quando o chat bot responde
│   └── favicon.ico          # Favicon da página
│
├── css/                    
│   ├── style.css            # style da página
│
├── js/                  
│   ├── script.js            # script para o funcionamento do chat
└─ server.js                 # servidor node para o backend da api
