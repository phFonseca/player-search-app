// Elementos DOM
const searchInput = document.getElementById('names')
const positionSelect = document.getElementById('position')
const playersList = document.getElementById('playersList')
const playersCounter = document.getElementById('playersCounter')
const playerModal = document.getElementById('playerModal')
const modalPlayerInfo = document.getElementById('modalPlayerInfo')
const closeModal = document.getElementById('closeModal')
const backToTopButton = document.getElementById('backToTop')

// Helpers
function createPlayerCard(player) {
	return `
			<li class="${player.position.toLowerCase()}" data-player-name="${player.name}">
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
			<div data-player-name="${player.name}" class="modalPlayer">
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
					<img src="${player.image}" alt="${player.name}"class="modalPlayerPhoto">
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

function handleBackToTopButton() {
	if (window.scrollY > 300) {
		backToTopButton.classList.add('show')
	} else {
		backToTopButton.classList.remove('show')
	}
}
// Inicialização
renderPlayers(atleticoPlayers)

// Eventos
searchInput.addEventListener('input', searchPlayers)

positionSelect.addEventListener('change', getSelectedPosition)

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

	const selectedPlayer = atleticoPlayers.find(
		(player) => player.name === card.dataset.playerName,
	)

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
