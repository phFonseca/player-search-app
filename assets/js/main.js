// Dados
const atleticoPlayers = [
	//Goleiros
	{ name: 'Everson', position: 'Goleiro', age: 35 },
	{ name: 'Gabriel Delfim', position: 'Goleiro', age: 23 },
	{ name: 'Robert', position: 'Goleiro', age: 21 },
	{ name: 'Pedro Cobra', position: 'Goleiro', age: 20 },

	//Zagueiros
	{ name: 'Iván Román', position: 'Zagueiro', age: 20 },
	{ name: 'Ruan Tressoldi', position: 'Zagueiro', age: 27 },
	{ name: 'Júnior Alonso', position: 'Zagueiro', age: 31 },
	{ name: 'Lyanco', position: 'Zagueiro', age: 29 },
	{ name: 'Vitor Hugo', position: 'Zagueiro', age: 35 },
	{ name: 'Vitão', position: 'Zagueiro', age: 18 },

	//Laterais
	{ name: 'Natanael', position: 'Lateral', age: 24 },
	{ name: 'Renan Lodi', position: 'Lateral', age: 28 },
	{ name: 'Angelo Preciado', position: 'Lateral', age: 28 },
	{ name: 'Kaua Pascini', position: 'Lateral', age: 18 },

	// Meias
	{ name: 'Alan Franco', position: 'Meia', age: 27 },
	{ name: 'Alexsander', position: 'Meia', age: 22 },
	{ name: 'Bernard', position: 'Meia', age: 33 },
	{ name: 'Gustavo Scarpa', position: 'Meia', age: 32 },
	{ name: 'Igor Gomes', position: 'Meia', age: 27 },
	{ name: 'Índio', position: 'Meia', age: 18 },
	{ name: 'Iseppe', position: 'Meia', age: 20 },
	{ name: 'Mamady Cissé', position: 'Meia', age: 19 },
	{ name: 'Maycon', position: 'Meia', age: 28 },
	{ name: 'Patrick', position: 'Meia', age: 22 },
	{ name: 'Reinier', position: 'Meia', age: 24 },
	{ name: 'Tomás Pérez', position: 'Meia', age: 20 },
	{ name: 'Víctor Hugo', position: 'Meia', age: 22 },

	// Atacantes
	{ name: 'Alan Minda', position: 'Atacante', age: 23 },
	{ name: 'Cauã Soares', position: 'Atacante', age: 17 },
	{ name: 'Dudu', position: 'Atacante', age: 34 },
	{ name: 'Mateo Cassierra', position: 'Atacante', age: 29 },
	{ name: 'Tomás Cuello', position: 'Atacante', age: 26 },
]

// Elementos DOM
const searchInput = document.getElementById('names')
const positionSelect = document.getElementById('position')
const playersList = document.getElementById('playersList')

// Helpers
function createPlayerCard(player) {
	return `
			<li class="${player.position.toLowerCase()}">
				<div class="playerName">${player.name}</div>
				<div class="playerPosition">${player.position}</div>
				<div class="playerAge">${player.age} anos</div>
			</li>
		`
}

// Renderização
function renderPlayers(players) {
	let listItems = ''

	for (const player of players) {
		listItems += createPlayerCard(player)
	}

	playersList.innerHTML = listItems
}

// Funcionalidades
function searchPlayers() {
	let search = searchInput.value.toLowerCase()

	if (search === '') {
		renderPlayers(atleticoPlayers)
		return
	}

	const playersFound = atleticoPlayers.filter((player) =>
		player.name.toLowerCase().includes(search),
	)

	renderPlayers(playersFound)
}

function getSelectedPosition() {
	const selectedPosition = positionSelect.value

	if (selectedPosition === '') {
		renderPlayers(atleticoPlayers)
		return
	}

	const filteredPositions = atleticoPlayers.filter(
		(player) => player.position.toLowerCase() === selectedPosition,
	)

	renderPlayers(filteredPositions)
}

// Inicialização
renderPlayers(atleticoPlayers)

// Eventos
searchInput.addEventListener('input', searchPlayers)
positionSelect.addEventListener('change', getSelectedPosition)
