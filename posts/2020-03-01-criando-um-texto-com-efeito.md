---
title: 'Criando um texto com efeito e animação com CSS, JS e HTML'
description: 'Crie um texto de impacto com utilizando apenas HTML, JS e CSS'
date: '2020-02-29 06:13:39'
image: /assets/img/blog-goodgo-finished.png
category: HTML
background: '#e34d26'
---
## Introdução

Fala pessoal hoje vou escrever sobre um assunto que sempre me deu muita repulsa, porém depois de estudá-lo um pouco mais, vi que não é nenhum bicho de sete cabeças, afinal que Dev. nunca se pegou quebrando a cabeça e tomando uma surra de HTML e CSS para centralizar um simples elemento na página lá no começo da carreira? rsrsrs

Você deve estar se perguntando que assunto é esse, porém o título não me deu espaço para surpresa e já denunciou que vamos criar um texto com efeito utilizando HTML, CSS e um pouco de JS, e o resultado final será como esse: 

![GoodGo gif](/assets/img/GoodGo.gif)

Enquanto eu escrevo esse post vou curtindo uma fucking playlist, montada com muito carinho por mim e outros amigos, de metalzão hahaha, caso curtir o estilo, segue o link: [TRY NOT TO HEADBANG](https://open.spotify.com/playlist/6NMCqtg2Q9MoFBeRzLVNXo?si=OZm97MjORA6ZpqnKsynChg)

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

Com esses estilos estamos:

**body:**   centralizando todo conteúdo no meio da tela, retirando as margens e  definindo que vamos utilizar a altura total, também estamos colocando uma imagem de fundo.

**h1:**  o mesmo ainda não possui nada, porém já estamos definindo um estilo, alinhando o conteúdo para que ser apresentado no formato de linha, com "margens" laterais, definindo para o texto uma font, um tamanho e uma cor, resultado esperado deve ser apenas uma imagem com montanhas.

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

Vamos as explicações...\
Em

```javascript
const rawText = "Good Go";

const text = document.getElementById("text");
const letters = rawText.split("");
```

estou criando uma constante que vai conter o texto que queremos inserir na tela, no caso do exemplo foi "Good Go".

Logo após criei uma constante onde capturo o elemento do html que tem o id text, que é o container onde vamos inserir o conteúdo.

Em seguida quebrei o texto com a função [split()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split) transformando a palavra em um array, onde cada letra é uma elemento do array, deixando na seguinte estrutura:

Antes -> "Good Go"; \
Depois -> \["G", "o", "o", "d", " ", "G", "o"].

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

Agora vamos inserir a linha que corta o texto. 

No arquivo style.css vamos inserir um pseudo-elemento, após o bloco de estilos do h1, inserimos o seguinte:

````css
h1::after {
  position: absolute;
  top: 45%;
  right: 0;
  width: 100vw;
  height: 2rem;
  border-radius: 0 50px 50px 0;
  background: crimson;
  content: "";
}
```
````

Com esses estilos estamos inserindo um linha que irá surgir no início da tela, e ir até o final do texto, o resultado deve ter ficado semelhante à este:

![GoodGo 2](/assets/img/blog-goodgo-2.png)

Até o momento temos uma página com vários elementos na tela (letras), e uma linha que passa por cima de todas elas, agora teremos que bolar uma estratégia para que a linha intercale entre as letras, mas calma, já resolvi esse problema da seguinte forma.

No arquivo script.js utilizei a lib Math para gerar números randômicos, como ela gera números de 0 à 1 estipulei que caso o número gerado randomicamente for maior que 0.5 é para inserir no elemento uma nova classe, "rev" uma abreviação de reverse, o código ficou da seguinte forma:

```javascript
letters.forEach(letter => {
  const newElement = document.createElement("span");
  newElement.classList.add("letter");
  newElement.textContent = letter;

  Math.random() > 0.5 && newElement.classList.add("rev");

  text.appendChild(newElement);
});
```

Dessa forma segreguei os elementos pelas classes, onde alguns tem apenas a classe "letter" e outros tem além a classe "rev", já vamos ver por qual motivo fiz isso, na próxima abordagem do problema.

Agora no style.css nos estilos da tag h1, vamos adicionar a propriedade [transform-style](https://developer.mozilla.org/pt-BR/docs/Web/CSS/transform-style) com o valor "preserve-3d", ela que irá habilitar os elementos filhos para  serem posicionados no espaço 3D, o código deve ficar semelhante a esse:

```css
h1 {
  display: flex;
  position: relative;
  padding: 0 0.125em;
  transform-style: preserve-3d;
  font-size: 15rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
}
```

Agora vamos editar o style.css para que possamos ter o feedback visual da propriedade que acabamos de inserir.

```css
.letter {
  transform: rotatey(2deg);
}

.rev {
  transform: rotatey(-2deg);
}
```

Adicionamos mais dois estilos, um para os elementos que contenham a classe "letter" e outro para a classe "rev", o valor informado para a propriedade transform (rotatey()) irá rotacionar nosso elemento, os que tiverem a classe "letter" no sentido positivo do eixo Y, fazendo a linha iniciar passando no elemento por baixo, e saindo por cima, e os elementos com a classe "rev" ao contrário, a linha começa passando por cima, e sai por baixo do elemento.

O resultado deve estar semelhante a esse:

![GoodGo 2](/assets/img/blog-goodgo-3.png)



Agora falta apenas colocar as animações para dar mais vida, então vamos lá...

No arquivo style.css vamos adicionar o código para duas animações, a animação **slide** que fará a linha que corta as letras deslizar da esquerda para direta, e a animação **goDown** que será responsável em fazer as letras caírem da parte superior da página e dar uma pequena quicada, o código é o seguinte:

```css
@keyframes slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes goDown {
  0% {
    opacity: 0;
    transform: translateY(-1000px);
  }
  50% {
    opacity: 0.7;
    transform: translateY(0);
  }
  70% {
    opacity: 1;
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}
```

Agora só informar onde elas(animações) serão utilizadas, ou seja, inserir a animação **slide** no pseudo-elemento de h1 e a animação g**oDown** no seletor dos elementos que possuem a classe "letter", ou seja, todos.

O código dos seletores **h1::after** e **.letter** devem estar semelhantes a esse:

```css
h1::after {
  position: absolute;
  top: 45%;
  right: 0;
  width: 100vw;
  height: 2rem;
  border-radius: 0 50px 50px 0;
  background: crimson;
  content: "";
  animation: slide 3s ease-out 0.4s backwards;
}

.letter {
  transform: rotatey(2deg);
  animation: goDown 1s backwards;
}
```



Feito isso já devemos ter as letras caindo da parte superior da tela, porém descem todas juntas, então agora para deixar o exemplo mais desafiador e legal vamos fazer elas cairem em tempos diferentes, faremos isso através do JavaScript, no arquivo script.js na função que havíamos criado anteriormente vamos adicionar o seguinte código:

```javascript
const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

newElement.style.animationDelay = `${random(0.1, 0.6)}s`;
newElement.style.animationDuration = `${random(0.4, 1)}s`;
```

No código acima estou criando uma função random, a mesma recebe dois valores, **min** e **max** que representa o intervalo entre o tempo máximo e mínimo que as letras devem cair, ela devolve um valor randômico entre os valores passados para ela.

Abaixo estou inserindo no elemento (que é a letra), um delay(atraso) e o tempo que a animação deve levar, utilizando o [template string](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings) estou chamando a função passando os valores início e fim, na primeira chamada informo que o delay deve ter entre 0.1 segundo até no máximo 0.6 segundos, e que a duração da animação deve acontecer entre 0.4 segundos até no máximo 1 segundo, o código final dessa função deve ser semelhando ao abaixo:

```javascript
letters.forEach(letter => {
  const newElement = document.createElement("span");
  newElement.classList.add("letter");
  newElement.textContent = letter;

  const random = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  newElement.style.animationDelay = `${random(0.1, 0.6)}s`;
  newElement.style.animationDuration = `${random(0.4, 1)}s`;

  Math.random() > 0.5 && newElement.classList.add("rev");

  text.appendChild(newElement);
});
```

e finalmente terminamos, agora devemos ter nosso texto caindo da parte superior, cada letra com um tempo diferente, e após isso temos a linha que sai da esquerda para direita e passa por todas as letras, dando o efeito de intercalação.

Uffa, espero que tenha gostado, se gostou da um joinh... não, pera, não estamos no YouTube hahaha.

Você pode consultar o código desse projeto [](https://codepen.io/david-borelli/pen/WNvORMw)pelo [codepen](https://codepen.io/david-borelli/pen/WNvORMw) ou pode acessar o repositório dele no [GitHub](https://github.com/davidborelli/GoodGo).

### Desafio

Foi utilizado a frase **Good Go** pois a mesma possui letras onde a linha pode fazer a intersecção de uma forma natural, caso você digitar alguma palavra com as letras, exemplo T, I, B e algumas outras, vai ficar com um efeito não muito legal.

Então o desafio é implementar a solução desse problema, quando for algumas dessas letras a linha deve passar totalmente por cima, ou por baixo, isso fica a seu critério.

Coloque o link do GitHub ou do CodePen nos comentários com exercício resolvido, caso tenha feito. 

**VAMOS INTERAGIR!**\
Caso tenham alguma dúvida ou sugestão comente abaixo.
