// Elementos DOM
const searchInput = document.getElementById('names')
const positionSelect = document.getElementById('position')
const playersList = document.getElementById('playersList')
const playersCounter = document.getElementById('playersCounter')
const playerModal = document.getElementById('playerModal')
const modalPlayerInfo = document.getElementById('modalPlayerInfo')
const closeModal = document.getElementById('closeModal')
const backToTopButton = document.getElementById('backToTop')
const sortButtons = document.querySelectorAll('[data-sort]')
let players = []
let currentSort = ''

async function init() {
	players = await getPlayers()

	renderPlayers(players)
}

// Helpers
function createPlayerCard(player) {
	return `
			<li class="${player.position.toLowerCase()}" data-player-id="${player.id}">
				<div class="playerInfo">
					<div class="playerName">${player.name}</div>
					<div class="playerPosition">${player.position}</div>
					<div class="shirtNumber">👕 Nº ${player.number}</div>
					<div class="playerAge">${player.age} anos</div>
					<div class="playerNationality">
						${player.flag} ${player.nationality}
					</div>
				</div>
				<div class="playerImg">
					<img src="${player.image}" alt="${player.name}" class="playerPhoto">
				</div>
			</li>
		`
}

function createPlayerModal(player) {
	return `
			<div data-player-id="${player.id}" class="modalPlayer">
				<div class="modalInfo">
				<div class="playerName">${player.name}</div>
					<div class="playerPosition">${player.position}</div>
					<div class="shirtNumber">👕 Nº ${player.number}</div>
					<div class="playerAge">${player.age} anos</div>
					<div class="playerNationality">
						${player.flag} ${player.nationality}
					</div>
				</div>
				<div class="modalImage">
					<img src="${player.image}" alt="${player.name}" class="modalPlayerPhoto">
				</div>
			</div>
		`
}

// Renderização
function renderPlayers(players) {
	let listItems = ''

	for (const player of players) {
		listItems += createPlayerCard(player)
	}

	playersList.innerHTML = listItems

	if (players.length === 0) {
		playersCounter.innerHTML = `Nenhum jogador encontrado`
	} else if (players.length === 1) {
		playersCounter.innerHTML = `${players.length} jogador encontrado`
	} else {
		playersCounter.innerHTML = `${players.length} jogadores encontrados`
	}
}

function renderPlayersModal(player) {
	modalPlayerInfo.innerHTML = createPlayerModal(player)
}

// Funcionalidades
function searchPlayers() {
	let search = searchInput.value.toLowerCase()

	if (search === '') {
		renderPlayers(players)
		return
	}

	const playersFound = players.filter((player) =>
		player.name.toLowerCase().includes(search),
	)

	renderPlayers(playersFound)
}

function getSelectedPosition() {
	const selectedPosition = positionSelect.value

	if (selectedPosition === '') {
		renderPlayers(players)
		return
	}

	const filteredPositions = players.filter(
		(player) => player.position.toLowerCase() === selectedPosition,
	)

	renderPlayers(filteredPositions)
}

function sortPlayers(playersToSort) {
	const sortedPlayers = [...playersToSort]

	if (currentSort === 'name-asc') {
		// ordem crescente
		sortedPlayers.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
	} else if (currentSort === 'name-desc') {
		// ordem decrescente
		sortedPlayers.sort((a, b) => b.name.localeCompare(a.name, 'pt-BR'))
	} else if (currentSort === 'age-asc') {
		// ordem crescente
		sortedPlayers.sort((a, b) => a.age - b.age)
	} else if (currentSort === 'age-desc') {
		// ordem decrescente
		sortedPlayers.sort((a, b) => b.age - a.age)
	}

	return sortedPlayers
}

function applyFilters() {
	let filteredPlayers = [...players]
	const search = searchInput.value.toLowerCase()
	const selectedPosition = positionSelect.value

	if (search !== '') {
		filteredPlayers = filteredPlayers.filter((playerFiltered) =>
			playerFiltered.name.toLowerCase().includes(search),
		)
	}

	if (selectedPosition !== '') {
		filteredPlayers = filteredPlayers.filter(
			(player) => player.position.toLowerCase() === selectedPosition,
		)
	}

	filteredPlayers = sortPlayers(filteredPlayers)

	renderPlayers(filteredPlayers)
}

function handleBackToTopButton() {
	if (window.scrollY > 300) {
		backToTopButton.classList.add('show')
	} else {
		backToTopButton.classList.remove('show')
	}
}
// Inicialização
init()

// Eventos
searchInput.addEventListener('input', applyFilters)

positionSelect.addEventListener('change', applyFilters)

for (const button of sortButtons) {
	button.addEventListener('click', (event) => {
		const selectedSort = (currentSort = event.currentTarget.dataset.sort)
		if (selectedSort === 'clear-sort') {
			currentSort = ''
			positionSelect.value = ''
		} else {
			currentSort = selectedSort
		}

		applyFilters()
	})
}

closeModal.addEventListener('click', () => {
	playerModal.classList.remove('open')
})

playerModal.addEventListener('click', (event) => {
	if (event.target === playerModal) {
		playerModal.classList.remove('open')
	}
})

playersList.addEventListener('click', (event) => {
	const card = event.target.closest('li')

	if (!card) return

	const selectedPlayer = players.find(
		(player) => String(player.id) === card.dataset.playerId,
	)

	if (!selectedPlayer) return

	renderPlayersModal(selectedPlayer)
	playerModal.classList.add('open')
})

window.addEventListener('scroll', handleBackToTopButton)

backToTopButton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})
