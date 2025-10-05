// Estrutura JSON dos filmes
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

// Exibir lista de filmes na home
if (document.getElementById("lista-filmes")) {
  const container = document.getElementById("lista-filmes");

  dados.forEach(filme => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${filme.imagem}" alt="${filme.titulo}">
      <h3>${filme.titulo}</h3>
      <p>${filme.descricao}</p>
      <a href="detalhes.html?id=${filme.id}">Ver detalhes</a>
    `;
    container.appendChild(card);
  });
}

// Exibir detalhes do filme
if (document.getElementById("detalhes-filme")) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const filme = dados.find(f => f.id === id);

  if (filme) {
    const container = document.getElementById("detalhes-filme");
    container.innerHTML = `
      <img src="${filme.imagem}" alt="${filme.titulo}">
      <h2>${filme.titulo}</h2>
      <p><strong>Diretor:</strong> ${filme.diretor}</p>
      <p><strong>Ano:</strong> ${filme.ano}</p>
      <p>${filme.conteudo}</p>
      <a href="index.html">⬅ Voltar</a>
    `;
  }
}
