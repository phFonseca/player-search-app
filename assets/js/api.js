async function getPlayers() {
	const response = await fetch('http://localhost:3000/players')
	const players = await response.json()

	// console.log(response)

	return players
}
