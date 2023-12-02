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
      <img src="./Kaazep.svg" alt="" id="logo" />
      {Users.length == 0 ? (
  <div>
  <p>مشروع تخرج  مادة السوفت وير</p>
  <p>عبارة عن لعبة بيلف الموبايل عليكم فتحاولوا تعرف مين بيحور</p>
  </div>
) : null}
      <p className="Welcome">أهلا بيك في لعبتنا</p>
      <p>عشان تلعب لازم تكونوا علي الاقل ٣</p>
      <form onSubmit={playerNameSubmit}>
        <div className="card">
          <input
            type="text"
            id="players"
            minLength={3}
            maxLength={15}
            value={playerName}
            onChange={handleInputChange}
          />

          <button type="submit">ضيف لاعب</button>
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
              <p>{text}</p>
              <button type="submit" onClick={() => playerDelete(index)}>
                أمسح
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen