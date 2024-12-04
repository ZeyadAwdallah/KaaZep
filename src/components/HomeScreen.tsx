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
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [error, setError] = useState<boolean>(false)
  useEffect(() => {
    setPlayers(Users.map((user) => user.name))
  }, [Users])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value)
  }

  const playerNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!playerName.trim()) return

    if (editingIndex !== null) {
      const updatedPlayers = [...players]
      updatedPlayers[editingIndex] = playerName
      setPlayers(updatedPlayers)

      const updatedUsers = Users.map((user, index) =>
        index === editingIndex ? { ...user, name: playerName } : user
      )
      setUsers(updatedUsers)
      setEditingIndex(null)
    } else {
      const newUser = {
        name: playerName,
        Id: Users.length > 0 ? Users[Users.length - 1].Id + 1 : 1,
        score: 0,
        Imposter: false,
      }
      setPlayers([...players, playerName])
      setUsers([...Users, newUser])
    }

    setPlayerName('')
  }

  const playerDelete = (index: number) => {
    const updatedPlayers = [...players]
    updatedPlayers.splice(index, 1)
    setPlayers(updatedPlayers)

    const updatedUsers = [...Users]
    updatedUsers.splice(index, 1)
    setUsers(updatedUsers)
  }

  const playerEdit = (index: number) => {
    setPlayerName(players[index])
    setEditingIndex(index)
  }

  return (
    <>
      <div id="details">
        <img src="./icons/Kaazep.svg" alt="" id="logo" />
        <p className="info">لعبة الموبايل بيلف عليكم فتسأل فتعرف مين بيحور</p>
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
          <button
            id="start"
            onClick={() => {
              if (Users.length < 3) {
                setError(true)
                setTimeout(() => {
                  setError(false)
                }, 1000)
              } else {
                setError(false)
                onGameStart()
              }
            }}
            type="button"
          >
            ابدأ
          </button>
        </div>
      </form>

      <h2>اللعيبة</h2>
      <div className="players">
        {players.map((text, index) => (
          <div className="player" key={index}>
            <p id="name">{text}</p>
            <div className="player-actions">
              <button type="button" id="edit" onClick={() => playerEdit(index)}>
                عدل
              </button>
              <button
                type="button"
                id="delete"
                onClick={() => playerDelete(index)}
              >
                أمسح
              </button>
            </div>
          </div>
        ))}
        {error && (
          <p style={{ color: 'red', marginBottom: '10px' }}>
            مقولنا عشان تلعب لازم ٣ معاك
          </p>
        )}
      </div>

      <p>
        اللعبة دي اتعملت من{' '}
        <a href="https://x.com/ZeyadAwdallah" target="blank">
          @ زيو
        </a>
      </p>
    </>
  )
}

export default HomeScreen
