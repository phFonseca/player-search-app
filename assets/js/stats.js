// Elementos DOM
const statsSummary = document.getElementById('statsSummary')
let players = []

async function init() {
	players = await getPlayers()

	// renderPlayers(players)
	renderTotalPlayers(players)
	renderAverageAge(players)
	renderOldestPlayer(players)
	renderYoungestPlayer(players)
}

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

// Getters
const getTotalPlayers = function (players) {
	return players.length
}

const getAverageAge = function (players) {
	if (!players.length) return

	let totalAge = 0
	const totalPlayers = players.length

	for (const player of players) {
		totalAge += player.age
	}

	const averageAge = totalAge / totalPlayers
	return Math.round(averageAge)
}

const getOldestPlayer = function (players) {
	if (!players.length) return

	let oldestPlayer = players[0]

	for (const player of players) {
		if (player.age > oldestPlayer.age) {
			oldestPlayer = player
		}
	}

	return oldestPlayer
}
const getYoungestPlayer = function (players) {
	if (!players.length) return

	let youngestPlayer = players[0]

	for (const player of players) {
		if (player.age < youngestPlayer.age) {
			youngestPlayer = player
		}
	}

	return youngestPlayer
}

// Renderização
const renderTotalPlayers = function (players) {
	const totalPlayers = getTotalPlayers(players)

	appendStatsCard('Total de jogadores', totalPlayers)
}

const renderAverageAge = function (players) {
	const averageAge = getAverageAge(players)
	appendStatsCard('Média de idade do elenco', `${averageAge} anos`)
}

const renderOldestPlayer = function (players) {
	const oldestPlayer = getOldestPlayer(players)

	statsSummary.innerHTML += `
    ${createStatsSectionTitle('Jogador mais velho do elenco')}
    ${createStatsPlayerCard(oldestPlayer)}
  `
}

const renderYoungestPlayer = function (players) {
	const youngestPlayer = getYoungestPlayer(players)

	statsSummary.innerHTML += `
    ${createStatsSectionTitle('Jogador mais novo do elenco')}
    ${createStatsPlayerCard(youngestPlayer)}
  `
}

// Inicialização
init()
// renderTotalPlayers(players)
// renderAverageAge(players)
// renderOldestPlayer(players)
// renderYoungestPlayer(players)
