<div><img alt="classroom-app" src="https://i.ibb.co/23S3yyG/Whats-App-Image-2021-09-27-at-15-37-49.jpg" width="260" height="510" />
<img alt="classroom-app" src="https://i.ibb.co/cv7SVMS/Whats-App-Image-2021-09-27-at-15-38-51.jpg" width="260" height="510" />
</div>

<h2>Introdução</h2>

<p>A Sala dos Gênios é uma plataforma que serve para acompanhar os assuntos a serem aprendidos e debatidos em uma aula ao vivo, onde o professor pode lançar perguntas em tempo real sobre os assuntos e acompanhar o resultado dos alunos, com o objetivo de mantê-los sempre focados.</p>

<p></p>

<p>Caso queira dar sugestões, críticas construtivas e reportar problemas, ficaria muito grato! 😁</p>

<h2>Conteúdo</h2>

<ul>
  <li><a href="#setup">Instalação</a></li>
  <li><a href="#codebase">Codebase Overview</a></li>
  <li><a href="#tech">Tech Stack</a></li>
</ul>

<h2 id="setup">Instalação</h2>
<p>Para executar o projeto em sua máquina, você deverá ter o node e o npm instalado globalmente.</p>
<p>Eu utilizei a versão 16.6.1 do node.</p>

<h3>Passo 1</h3>

Faça um clone do projeto e instale as dependências em ambos os diretórios (frontend e backend):

Com npm:

```
git clone https://github.com/JosueFS/classroom-app.git
cd classroom-app/frontend && npm install
cd classroom-app/backend && npm install
```

Ou com yarn:

```
git clone https://github.com/JosueFS/classroom-app.git
cd classroom-app/frontend && yarn
cd classroom-app/backend && yarn
```

<h3>Passo 2</h3>

Crie um database no mongoDB Atlas ou algum outro de sua preferência e um conta de acesso, após isso você poderá obter as variáveis de ambiente para utilizar nos arquivos .env:

```
# backend\.env
PORT=3333
MONGODB_URL=mongodb+srv://...
MONGODB_DBNAME=classroom-app

# frontend\.env

REACT_APP_SERVER_URL=http://localhost:3333
```

<h3>Passo 3</h3>

Inicie um servidor de desenvolvimento:

```
cd frontend && npm start || cd frontend && yarn start
cd backend && npm dev || cd backend && yarn dev
```

<h2>Algumas telas da aplicação</h2>

<div>
<img alt="classroom-app" src="https://i.ibb.co/dbyTRSR/Whats-App-Image-2021-09-27-at-15-37-49-1.jpg" width="260" height="510" />
<img alt="classroom-app" src="https://i.ibb.co/5GDSM1F/Whats-App-Image-2021-09-27-at-15-37-49-2.jpg" width="260" height="510" />
<img alt="classroom-app" src="https://i.ibb.co/0m95hqX/Whats-App-Image-2021-09-27-at-15-37-49-3.jpg" width="260" height="510" />
</div>

<br>

<div>
<img alt="classroom-app" src="https://i.ibb.co/1v4MVpL/Whats-App-Image-2021-09-27-at-15-38-51-1.jpg" width="260" height="510" />
<img alt="classroom-app" src="https://i.ibb.co/vBTJGZP/Whats-App-Image-2021-09-27-at-15-38-51-2.jpg" width="260" height="510" />
<img alt="classroom-app" src="https://i.ibb.co/ncSRYZ6/Whats-App-Image-2021-09-27-at-15-38-51-3.jpg" width="260" height="510" />
</div>

<br>

<div>
<img alt="classroom-app" src="https://i.ibb.co/ncSRYZ6/Whats-App-Image-2021-09-27-at-15-38-51-3.jpg" width="260" height="510" />
<img alt="classroom-app" src="https://i.ibb.co/VJqzCd9/Whats-App-Image-2021-09-28-at-19-39-09-3.jpg" width="260" height="510" />
<img alt="classroom-app" src="https://i.ibb.co/bdv7tDG/Whats-App-Image-2021-09-28-at-19-39-10-2.jpg" width="260" height="510" />
</div>

<h2>Como contribuir?</h2>

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
   > Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

<h2><a id="user-content--autor" class="anchor" aria-hidden="true" href="#-autor"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><g-emoji class="g-emoji" alias="superhero" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f9b8.png">🦸</g-emoji> Autor</h2>

<p><a href="https://www.linkedin.com/in/jfds/" rel="nofollow"><img src="https://camo.githubusercontent.com/f571d22e4953fdd4bf347e1d1318f8c4a63ca49b1c0a3bebf1ce945e5621c5e0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6f73756546532d626c75653f7374796c653d666c61742d737175617265266c6f676f3d4c696e6b6564696e266c6f676f436f6c6f723d7768697465266c696e6b3d68747470733a2f2f7777772e6c696e6b6564696e2e636f6d2f696e2f6a6664732f" alt="Linkedin Badge" data-canonical-src="https://img.shields.io/badge/-JosueFS-blue?style=flat-square&amp;logo=Linkedin&amp;logoColor=white&amp;link=https://www.linkedin.com/in/jfds/" style="max-width: 100%;"></a>
<a href="mailto:josue.18rj@gmail.com"><img src="https://camo.githubusercontent.com/4553a2ba188cff05516467c9904f357717c59122b46d2591dc80631e56685157/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6f737565465340676d61696c2e636f6d2d6331343433383f7374796c653d666c61742d737175617265266c6f676f3d476d61696c266c6f676f436f6c6f723d7768697465266c696e6b3d6d61696c746f3a6a6f7375652e3138726a40676d61696c2e636f6d" alt="Gmail Badge" data-canonical-src="https://img.shields.io/badge/-JosueFS@gmail.com-c14438?style=flat-square&amp;logo=Gmail&amp;logoColor=white&amp;link=mailto:josue.18rj@gmail.com" style="max-width: 100%;"></a></p>

<hr>

<h2><a id="user-content--licença" class="anchor" aria-hidden="true" href="#-licença"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><g-emoji class="g-emoji" alias="memo" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4dd.png">📝</g-emoji> Licença</h2>

<p>Este projeto esta sobe a licença <a href="/JosueFS/Ecoleta-NLW/blob/master/LICENSE">MIT</a>.</p>

<p><a href="https://www.linkedin.com/in/jfds/" rel="nofollow">Entre em contato!</a></p>
