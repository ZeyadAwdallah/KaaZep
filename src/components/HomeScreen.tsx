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
  setUsers: React.Dispatch<
    React.SetStateAction<
      { name: string; Id: number; score: number; Imposter: boolean }[]
    >
  >
  Users: { name: string; Id: number; score: number; Imposter: boolean }[]
}) {
  const [playerName, setPlayerName] = useState<string>('')
  const [Id, setId] = useState<number>(0)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  useEffect(() => {
    const updatedUsers = handleUsers()
    setUsers(updatedUsers)
  }, [players])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value)
  }

  function generateId() {
    setId(Id + 1)
    return Id
  }

  function handleUsers() {
    return players.map((player) => {
      const existingUser = Users.find((user) => user.name === player)
      return existingUser
        ? { ...existingUser }
        : { name: player, Id: generateId(), score: 0, Imposter: false }
    })
  }

  const playerNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!playerName.trim()) {
      return
    }

    if (editingIndex !== null) {
      // Edit existing player
      const updatedPlayers = [...players]
      updatedPlayers[editingIndex] = playerName
      setPlayers(updatedPlayers)
      setEditingIndex(null)
    } else {
      // Add new player
      setPlayers([...players, playerName])
    }

    setPlayerName('')
  }

  const playerDelete = (index: number) => {
    const updatedPlayers: string[] = [...players]
    updatedPlayers.splice(index, 1)
    setPlayers(updatedPlayers)
  }

  const playerEdit = (index: number) => {
    setPlayerName(players[index])
    setEditingIndex(index)
  }

  return (
    <div>
      <div id="details">
        <img src="./icons/Kaazep.svg" alt="" id="logo" />
        <p className="info">لعبة الموبايل بيلف عليكم فتسأل فتعرف مين بيحور </p>
      </div>

      <form onSubmit={playerNameSubmit}>
        <p className="Welcome">أهلا بيك في لعبتنا</p>
        <p>عشان تلعب لازم تكونوا علي الاقل ٣</p>
        <div className="card">
          <input
            type="text"
            id="players"
            minLength={3}
            maxLength={16}
            value={playerName}
            onChange={handleInputChange}
            placeholder={editingIndex !== null ? 'تعديل اللاعب' : 'اسم اللاعب'}
          />
          <button type="submit">
            {editingIndex !== null ? 'حفظ التعديل' : 'ضيف لاعب'}
          </button>
          <button id="start" onClick={onGameStart}>
            ابدأ
          </button>
        </div>
      </form>
      <div>
        <h2>اللعيبة</h2>
        <div className="players">
          {players.map((text, index) => (
            <div className="player" key={index}>
              <p id="name">{text}</p>
              <div className="player-actions">
                <button
                  type="button"
                  id="edit"
                  onClick={() => playerEdit(index)}
                >
                  عدل
                </button>
                <button
                  type="submit"
                  id="delete"
                  onClick={() => playerDelete(index)}
                >
                  أمسح
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
