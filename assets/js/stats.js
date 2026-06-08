// Elementos DOM
const statsSummary = document.getElementById('statsSummary')

// Helpers
const createStatsCard = function (title, value) {
	return `
				<div class="statsCard">
	        <span>${title}:</span>
	        <strong>${value}</strong>
				</div>
		`
}

function createStatsPlayerCard(player) {
	return `
			<div class="statsPlayerCard">
				<div class="statsPlayerInfo">
					<div class="statsPlayerName">${player.name}</div>
					<div class="statsPlayerPosition">${player.position}</div>
					<div class="statsPlayerBadge">👕 Nº ${player.number}</div>
					<div class="statsPlayerAge">${player.age} anos</div>
					<div class="statsPlayerBadge">
						${player.flag} ${player.nationality}
					</div>
				</div>
				<div>
					<img src="${player.image}" alt="${player.name}" class="statsPlayerPhoto">
				</div>
			</div>
		`
}

const appendStatsCard = function (title, value) {
	statsSummary.innerHTML += createStatsCard(title, value)
}

const createStatsSectionTitle = function (title) {
	return `
		<h3 class="statsSectionTitle">
			${title}
		</h3>
	`
}

// Renderização
const renderTotalPlayers = function () {
	const totalPlayers = atleticoPlayers.length

	appendStatsCard('Total de jogadores', totalPlayers)
}

const renderOldestPlayer = function (players) {
	let oldestPlayer = players[0]

	for (const player of players) {
		if (player.age > oldestPlayer.age) {
			oldestPlayer = player
		}
	}
	statsSummary.innerHTML += `
    ${createStatsSectionTitle('Jogador mais velho do elenco')}
    ${createStatsPlayerCard(oldestPlayer)}
  `
}

const renderYoungestPlayer = function (players) {
	let youngestPlayer = players[0]

	for (const player of players) {
		if (player.age < youngestPlayer.age) {
			youngestPlayer = player
		}
	}
	statsSummary.innerHTML += `
    ${createStatsSectionTitle('Jogador mais novo do elenco')}
    ${createStatsPlayerCard(youngestPlayer)}
  `
}

// Inicialização
renderTotalPlayers()
renderOldestPlayer(atleticoPlayers)
renderYoungestPlayer(atleticoPlayers)
