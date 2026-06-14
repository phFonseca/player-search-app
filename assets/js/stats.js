// Elementos DOM
const statsSummary = document.getElementById('statsSummary')
const positionStats = document.getElementById('positionStats')
const statsHighlights = document.getElementById('statsHighlights')
let players = []

async function init() {
	players = await getPlayers()

	renderTotalPlayers(players)
	renderAverageAge(players)
	renderForeignPlayers(players)
	renderOldestPlayer(players)
	renderYoungestPlayer(players)
	renderPlayersByPosition(players)
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

const getForeignPlayers = function (players) {
	let foreignPlayers = 0

	for (const player of players) {
		if (player.nationality !== 'Brasil') {
			foreignPlayers += 1
		}
	}

	return foreignPlayers
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

const getPlayersByPosition = function (players) {
	const positions = {}

	for (const player of players) {
		const position = player.position

		if (positions[position] === undefined) {
			positions[position] = 1
		} else {
			positions[position] += 1
		}
	}

	// {
	// 	Goleiro: 4,
	// 	Zagueiro: 6,
	// 	Lateral: 4,
	// 	Meia: 13,
	// 	Atacante: 5
	// }
	return positions
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

const renderForeignPlayers = function (players) {
	const foreignPlayers = getForeignPlayers(players)
	appendStatsCard('Estrangeiros no elenco', foreignPlayers)
}

const renderOldestPlayer = function (players) {
	const oldestPlayer = getOldestPlayer(players)

	statsHighlights.innerHTML += `
		<div>
			${createStatsSectionTitle('Jogador mais velho do elenco')}
			${createStatsPlayerCard(oldestPlayer)}
		</div>
  `
}

const renderYoungestPlayer = function (players) {
	const youngestPlayer = getYoungestPlayer(players)

	statsHighlights.innerHTML += `
		<div>
			${createStatsSectionTitle('Jogador mais novo do elenco')}
			${createStatsPlayerCard(youngestPlayer)}
		</div>
  `
}

const renderPlayersByPosition = function (players) {
	let positionCards = ''

	const positions = getPlayersByPosition(players)

	for (const [position, amount] of Object.entries(positions)) {
		positionCards += createStatsCard(position, amount)
	}

	positionStats.innerHTML += `
		<div class="statsGridPosition">
			${positionCards}
		</div>
	`
}

// Inicialização
init()
