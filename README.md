# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome:
- Matricula:
- Proposta de projeto escolhida:
- Breve descrição sobre seu projeto:

## Print da Home-Page

![Print da Home-Page](homepage.png)

## Print da página de detalhes do item

![Página de detalhes](detalhes.png)

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const dados = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    descricao: "Um jovem hobbit embarca em uma jornada para destruir o Um Anel.",
    conteudo: "Frodo Bolseiro herda um anel poderoso e maligno e deve destruí-lo para impedir que Sauron domine a Terra Média.",
    diretor: "Peter Jackson",
    ano: 2001,
    imagem: "img/sociedade.jpg"
  },
  {
    id: 2,
    titulo: "Interestelar",
    descricao: "Exploradores viajam através de um buraco de minhoca em busca de um novo lar para a humanidade.",
    conteudo: "No futuro, a Terra está morrendo. Um grupo de astronautas parte em uma missão para encontrar um novo planeta habitável.",
    diretor: "Christopher Nolan",
    ano: 2014,
    imagem: "img/interestelar.jpg"
  },
  {
    id: 3,
    titulo: "Coringa",
    descricao: "A origem sombria de um dos maiores vilões dos quadrinhos.",
    conteudo: "Arthur Fleck é um comediante que sofre com problemas mentais e acaba se transformando no temido Coringa.",
    diretor: "Todd Phillips",
    ano: 2019,
    imagem: "img/coringa.jpg"
  }
];
```