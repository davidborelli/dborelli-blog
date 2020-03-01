---
title: Criando um texto com efeito
description: 'Crie um texto de impacto com utilizando apenas HTML, JS e CSS'
date: '2020-02-29 06:13:39'
image: /assets/img/blog-goodgo-1.png
category: HTML
background: '#e34d26'
---
## Introdução

Fala pessoal hoje vou escrever sobre um assunto que sempre me deu muita repulsa, porém depois de estudá-lo um pouco mais, vi que não é nenhum bicho de sete cabeças, afinal que Dev. nunca se pegou quebrando a cabeça e tomando uma surra de HTML e CSS para centralizar um simples elemento na página lá no começo da carreira? rsrsrs

Você deve estar se perguntando que assunto é esse, porém o título não deu espaço para surpresa e já denunciou que vamos criar um texto com efeito utilizando HTML, CSS e um pouco de JS, e o resultado final será como esse: 

![GoodGo gif](/assets/img/GoodGo.gif)

Enquanto eu escrevo esse post vou curtindo uma fucking playlist, montada com muito carinho por mim e outros amigos, de metalzão hahaha,
caso curtir o estilo, segue o link: [TRY NOT TO HEADBANG](spotify:playlist:6NMCqtg2Q9MoFBeRzLVNXo)

## Hands-on

Bom, feito as devidas apresentações chega de conversa e vamos para o hands-on.

Á princípio foi criado uma estrutura básica de arquivos apenas para demonstração do post, que é:

1. index.html;
2. style.css;
3. script.js

No index.html temos a estrutura básica de um HTML, já com a importação do style.css e do script.js, o arquivo final deve estar nesse formato:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="./styles.css" />

    <title>Weaving Line</title>
  </head>
  <body>
    <h1 id="text"></h1>
    <script src="./script.js"></script>
  </body>
</html>
```

a parte
```html
<h1 id="text"></h1>
```
servirá de container para inserirmos o texto, até o final do post ela permanecerá assim, não precisaremos mais mexer nele.

Agora vamos inserir alguns estilos básicos no style.css para já ter algum feedback visual.

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100vh;
  background: url(https://images.unsplash.com/photo-1581091973470-023528f664f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80%20889w)
    center/100%;
}

h1 {
  display: flex;
  position: relative;
  padding: 0 0.125em;
  font-size: 15rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
}
```

**Com esses estilos estamos: ** </br>

**body:** 
 centralizando todo conteúdo no meio da tela, retirando as margens e  definindo que vamos utilizar a altura total, também estamos colocando uma imagem de fundo.

**h1:**
 o mesmo ainda não possui nada, porém já estamos definindo um estilo, alinhando o conteúdo para que ser apresentado no formato de linha, com "margens" laterais, definindo para o texto uma font, um tamanho e uma cor, resultado esperado deve ser apenas uma imagem com montanhas.

Agora vamos inserir conteúdo no script.js.
```javascript
const rawText = "Good Go";

const text = document.getElementById("text");
const letters = rawText.split("");

letters.forEach(letter => {
  const newElement = document.createElement("span");
  newElement.classList.add("letter");
  newElement.textContent = letter;

  text.appendChild(newElement);
});
```

Vamos as explicações... </br>

Em
```javascript
const rawText = "Good Go";

const text = document.getElementById("text");
const letters = rawText.split("");
```
estou criando uma constante que vai ser o texto que queremos inserir na tela, no caso do exemplo foi "Good Go".

Logo após criei uma constante onde capturo o elemento do html que tem o id text, que vai ser o container onde vamos inserir o conteúdo.

Em seguida quebrei o texto com a função [split()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split) transformando a palavra em um array, onde cada letra é uma elemento do array, deixando na seguinte estrutura:

Antes -> "Good Go"; </br>
Depois -> ["G", "o", "o", "d", " ", "G", "o"].

Em
```javascript
letters.forEach(letter => {
  const newElement = document.createElement("span");
  newElement.classList.add("letter");
  newElement.textContent = letter;

  text.appendChild(newElement);
});
```

é feita a transformação da palavra em um array, em seguida é percorrido todos os seus elementos utilizando o [forEach()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), onde para cada elemento do array é criado um elemento HTML <span>, atribuído para ele a classe "letter" e inserindo o conteúdo da iteração em questão, e depois inserimos esse elemento na nossa página html.

A estrutura montada fica da seguinte forma:
```html
<span class="letter">G</span>
<span class="letter">o</span>
<span class="letter">o</span>
<span class="letter">d</span>
<span class="letter"> </span>
<span class="letter">G</span>
<span class="letter">o</span>
```

O resultado deve ter ficado da seguinte forma:

![Resultado esperado 1](/assets/img/blog-goodgo-1.png)


