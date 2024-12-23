import { useState, useEffect } from 'react'
import StagesScreen from './components/StagesScreen'
import HomeScreen from './components/HomeScreen'
import QuestionScreen from './components/QuestionScreen'
import ResultScreen from './components/ResultScreen'
import SecretScreen from './components/SecretScreen'
import VoteScreen from './components/VoteScreen'
import ImposterScreen from './components/ImposterScreen'
import Screen from './Screen'

interface User {
  name: string
  Id: number
  score: number
  Imposter: boolean
}

function App() {
  // Load users from local storage on initial render
  const [Users, setUsers] = useState<User[]>(() => {
    const savedUsers = localStorage.getItem('gameUsers')
    return savedUsers ? JSON.parse(savedUsers) : []
  })

  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Home)
  const [players, setPlayers] = useState<string[]>([])
  const [selectedStageNames, setSelectedStageNames] = useState<string[]>([])
  const [selectedQuest, setSelectedQuest] = useState<string>('')

  // Save users to local storage whenever Users state changes
  useEffect(() => {
    localStorage.setItem('gameUsers', JSON.stringify(Users))
  }, [Users])

  const theImposter = () => {
    const randomIndex = Math.floor(Math.random() * Users.length)
    setUsers((users) =>
      users.map((user, index) =>
        index === randomIndex ? { ...user, Imposter: true } : user
      )
    )
  }

  const handleGameStart = () => {
    if (Users.length > 2) {
      theImposter()
      setCurrentScreen(Screen.Stages)
    }
  }

  const handleBack = () => {
    setCurrentScreen(Screen.Home)
  }

  const handlenewGame = () => {
    setCurrentScreen(Screen.Home)
    setUsers((users) => users.map((user) => ({ ...user, Imposter: false })))
  }

  const handleRandomName = (randomName: string, names: string[]) => {
    setSelectedQuest(randomName)
    setSelectedStageNames(names)
    setCurrentScreen(Screen.Secret)
  }

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen)
  }

  switch (currentScreen) {
    case Screen.Home:
      return (
        <HomeScreen
          onGameStart={handleGameStart}
          setPlayers={setPlayers}
          players={players}
          Users={Users}
          setUsers={setUsers}
        />
      )
    case Screen.Stages:
      return (
        <StagesScreen
          onGameBack={handleBack}
          handleRandomName={handleRandomName}
        />
      )
    case Screen.Secret:
      return (
        <SecretScreen
          Userz={Users}
          quest={selectedQuest}
          setNextScreen={() => navigateTo(Screen.Question)}
        />
      )
    case Screen.Question:
      return (
        <QuestionScreen
          Userz={Users}
          setNextScreen={() => navigateTo(Screen.Vote)}
        />
      )
    case Screen.Vote:
      return (
        <VoteScreen
          Userz={Users}
          setNextScreen={() => navigateTo(Screen.Imposter)}
          setUserz={setUsers}
        />
      )
    case Screen.Imposter:
      return (
        <ImposterScreen
          quest={selectedQuest}
          setNextScreen={() => navigateTo(Screen.Result)}
          selectedStage={selectedStageNames}
          Userz={Users}
          setUserz={setUsers}
        />
      )
    case Screen.Result:
      return <ResultScreen Userz={Users} setNextScreen={handlenewGame} />
    default:
      return <p>Loading</p>
  }
}

export default App
