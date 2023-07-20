let champions = [];

const listElement = document.getElementById('championList');
const cardElement = document.getElementById('championCard');

fetch('ChampionsData/jaxData.json')
  .then(response => response.json())
  .then(data => {
    champions = data;
    champions.forEach((champion, index) => {
        const listItem = document.createElement('li');
        const champIcon = document.createElement('img');

        champIcon.src = `http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${champion.id}.png`;
        champIcon.alt = champion.name;
        champIcon.width = 50; // você pode ajustar o tamanho da imagem conforme necessário

        listItem.textContent = champion.name;
        listItem.prepend(champIcon); // adiciona a imagem antes do nome do campeão
        listItem.addEventListener('click', () => {
            fillCard(champion);
        });

        listElement.append(listItem);
    });
    fillCard(champions[0]);
  });

function fillCard(champion) {
    cardElement.innerHTML = `
    <img src="http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${champion.id}.png" alt="${champion.name}" width="200">
    <h2>${champion.name}</h2>
    <div class = "containerMainInfos"> 
    <p><strong>Resumo:</strong> ${champion.summary}</p>
    <p><strong>Dificuldade:</strong> ${champion.difficulty}</p>
    <p><strong>Runas:</strong> ${champion.runes}</p>
    <p><strong>Feitiços:</strong> ${champion.speels}</p>
    </div>
    <p><strong>Nível 1:</strong> ${champion.level1}</p>
    <p><strong>Nível 2:</strong> ${champion.level2}</p>
    <p><strong>Nível 3:</strong> ${champion.level3}</p>
    <p><strong>Nível 6:</strong> ${champion.level6}</p>
    <p><strong>Estratégia:</strong> ${champion.strategy}</p>
    <p><strong>Vídeo:</strong> <a href="${champion.video}">Assista aqui</a></p>
  `;
}
