import React, { useState, useEffect } from 'react'
function HomeScreen({
  onGameStart,
  setPlayers,
  players,
  setUsers,
  Users,
}: {
  onGameStart: () => void
  setPlayers: React.Dispatch<React.SetStateAction<string[]>>
  players: string[]
  setUsers: React.Dispatch<React.SetStateAction<{ name: string; Id: number; score: number; Imposter: boolean }[]>>
  Users: { name: string; Id: number; score: number; Imposter: boolean }[]
}) {

  useEffect(() => {
    Users = handleUsers()
    setUsers(Users)
  }, [players])

  const [playerName, setPlayerName] = useState<string>('')
  let i = 0
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value)
  }
  function generateId() {
    return i++
  }

  function handleUsers() {
    return players.map((player) => {
      const existingUser = Users.find((user) => user.name === player);
      return existingUser
        ? { ...existingUser }
        : { name: player, Id: generateId(), score: 0, Imposter: false };
    });
  }


  const playerNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!playerName.trim()) {
      return
    }
    setPlayers([...players, playerName])

    setPlayerName('')
  }

  const playerDelete = (index: number) => {
    const updatedPlayers: string[] = [...players]
    updatedPlayers.splice(index, 1)
    setPlayers(updatedPlayers)
  }

  return (
    <div>
      <img src="/Secret-Z.Svg" alt="" id="logo" />
      <p className="Welcome">Welcome To Our Game</p>
      <p>You need at least three Players to start</p>
      <form onSubmit={playerNameSubmit}>
        <div className="card">
          <input
            type="text"
            id="players"
            minLength={3}
            maxLength={14}
            value={playerName}
            onChange={handleInputChange}
          />

          <button type="submit">ADD</button>
          <button id="start" onClick={onGameStart}>
            Start
          </button>
        </div>
      </form>
      <div>
        <h2>Players</h2>
        <div className="players">
          {players.map((text, index) => (
            <div className="player" key={index}>
              <p>{text}</p>
              <button type="submit" onClick={() => playerDelete(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
