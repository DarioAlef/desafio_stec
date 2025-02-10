To initialize the projet, in the termianal:

1. npm init -y
2. npm install express cors dotenv axios nodemon
3. (in case don't have the path, create in "scripts", in package.json)  "dev": "nodemon server.js",
4. create .env file in the source of the project 
5. npm run dev
6. open index.html with the extensions live on server 


# Architecture: 
desafio_stec/
│
├── index.html            # Página principal
├── assets/               # Pasta para recursos estáticos como imagens, fontes, ícones, etc.
│   ├── images/           # Imagens usadas na landing page
│   │   └── logo.png
│   │   └── background.jpg
│   ├── fonts/            # Fontes customizadas
│   │   └── custom-font.ttf
│   └── favicon.ico       # Favicon da página
│
├── css/                  # Arquivos de estilo CSS
│   ├── main.css          # Estilos principais da landing page
│   ├── responsive.css    # Estilos específicos para diferentes dispositivos (mobile-first)
│
├── js/                   # Arquivos de JavaScript
│   ├── main.js           # Lógica principal, como interações com o DOM
│   ├── analytics.js      # Código para integração com ferramentas de análise (Google Analytics, Hotjar)
└── manifest.json         # Manifesto da aplicação (se for necessário para PWA)
