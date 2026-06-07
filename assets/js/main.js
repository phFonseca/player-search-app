// Dados
const atleticoPlayers = [
	//Goleiros
	{
		name: 'Everson',
		position: 'Goleiro',
		age: 35,
		number: 22,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/everson.webp',
	},
	{
		name: 'Gabriel Delfim',
		position: 'Goleiro',
		age: 23,
		number: 1,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/gabriel-delfim.webp',
	},
	{
		name: 'Robert',
		position: 'Goleiro',
		age: 21,
		number: 31,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/robert.webp',
	},
	{
		name: 'Pedro Cobra',
		position: 'Goleiro',
		age: 20,
		number: 46,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/pedro-cobra.webp',
	},

	//Zagueiros
	{
		name: 'Iván Román',
		position: 'Zagueiro',
		age: 20,
		number: 3,
		nationality: 'Chile',
		flag: '🇨🇱',
		image: 'assets/img/players/roman.webp',
	},
	{
		name: 'Ruan Tressoldi',
		position: 'Zagueiro',
		age: 27,
		number: 4,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/ruan.webp',
	},
	{
		name: 'Júnior Alonso',
		position: 'Zagueiro',
		age: 31,
		number: 6,
		nationality: 'Paraguai',
		flag: '🇵🇾',
		image: 'assets/img/players/alonso.webp',
	},
	{
		name: 'Lyanco',
		position: 'Zagueiro',
		age: 29,
		number: 13,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/lyanco.webp',
	},
	{
		name: 'Vitor Hugo',
		position: 'Zagueiro',
		age: 35,
		number: 14,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/vitor-hugo.webp',
	},
	{
		name: 'Vitão',
		position: 'Zagueiro',
		age: 18,
		number: 40,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/vitao.webp',
	},

	//Laterais
	{
		name: 'Natanael',
		position: 'Lateral',
		age: 24,
		number: 2,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/natanael.webp',
	},
	{
		name: 'Renan Lodi',
		position: 'Lateral',
		age: 28,
		number: 16,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/lodi.webp',
	},
	{
		name: 'Angelo Preciado',
		position: 'Lateral',
		age: 28,
		number: 23,
		nationality: 'Colômbia',
		flag: '🇨🇴',
		image: 'assets/img/players/preciado.webp',
	},
	{
		name: 'Kaua Pascini',
		position: 'Lateral',
		age: 18,
		number: 36,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/pascini.webp',
	},

	// Meias
	{
		name: 'Alan Franco',
		position: 'Meia',
		age: 27,
		number: 21,
		nationality: 'Equador',
		flag: '🇪🇨',
		image: 'assets/img/players/franco.webp',
	},
	{
		name: 'Alexsander',
		position: 'Meia',
		age: 22,
		number: 5,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/alexsander.webp',
	},
	{
		name: 'Bernard',
		position: 'Meia',
		age: 33,
		number: 11,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/bernard.webp',
	},
	{
		name: 'Gustavo Scarpa',
		position: 'Meia',
		age: 32,
		number: 10,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/scarpa.webp',
	},
	{
		name: 'Igor Gomes',
		position: 'Meia',
		age: 27,
		number: 17,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/igor-gomes.webp',
	},
	{
		name: 'Índio',
		position: 'Meia',
		age: 18,
		number: 38,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/indio.webp',
	},
	{
		name: 'Iseppe',
		position: 'Meia',
		age: 20,
		number: 48,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/iseppe.webp',
	},
	{
		name: 'Mamady Cissé',
		position: 'Meia',
		age: 19,
		number: 39,
		nationality: 'Guiné',
		flag: '🇬🇳',
		image: 'assets/img/players/cisse.webp',
	},
	{
		name: 'Maycon',
		position: 'Meia',
		age: 28,
		number: 8,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/maycon.webp',
	},
	{
		name: 'Patrick',
		position: 'Meia',
		age: 22,
		number: 20,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/patrick.webp',
	},
	{
		name: 'Reinier',
		position: 'Meia',
		age: 24,
		number: 19,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/reinier.webp',
	},
	{
		name: 'Tomás Pérez',
		position: 'Meia',
		age: 20,
		number: 25,
		nationality: 'Argetina',
		flag: '🇦🇷',
		image: 'assets/img/players/perez.webp',
	},
	{
		name: 'Víctor Hugo',
		position: 'Meia',
		age: 22,
		number: 30,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/victor-hugo.webp',
	},

	// Atacantes
	{
		name: 'Alan Minda',
		position: 'Atacante',
		age: 23,
		number: 27,
		nationality: 'Equador',
		flag: '🇪🇨',
		image: 'assets/img/players/minda.webp',
	},
	{
		name: 'Cauã Soares',
		position: 'Atacante',
		age: 17,
		number: 29,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/caua.webp',
	},
	{
		name: 'Dudu',
		position: 'Atacante',
		age: 34,
		number: 92,
		nationality: 'Brasil',
		flag: '🇧🇷',
		image: 'assets/img/players/dudu.webp',
	},
	{
		name: 'Mateo Cassierra',
		position: 'Atacante',
		age: 29,
		number: 9,
		nationality: 'Colômbia',
		flag: '🇨🇴',
		image: 'assets/img/players/cassierra.webp',
	},
	{
		name: 'Tomás Cuello',
		position: 'Atacante',
		age: 26,
		number: 28,
		nationality: 'Argentina',
		flag: '🇦🇷',
		image: 'assets/img/players/cuello.webp',
	},
]

// Elementos DOM
const searchInput = document.getElementById('names')
const positionSelect = document.getElementById('position')
const playersList = document.getElementById('playersList')
const playersCounter = document.getElementById('playersCounter')

// Helpers
function createPlayerCard(player) {
	return `
			<li class="${player.position.toLowerCase()}">
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
