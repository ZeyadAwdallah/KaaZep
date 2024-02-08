import { useState } from 'react'
import StagesScreen from './components/StagesScreen'
import HomeScreen from './components/HomeScreen'
import QuestionScreen from './components/QuestionScreen'
import ResultScreen from './components/ResultScreen'
import SecretScreen from './components/SecretScreen'
import VoteScreen from './components/VoteScreen'
import ImposterScreen from './components/ImposterScreen'
import Screen from './Screen'
import './App.css'
function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Home)
  const [players, setPlayers] = useState<string[]>([])
  const [selectedStageNames, setSelectedStageNames] = useState<string[]>([])
  const [selectedQuest, setSelectedQuest] = useState<string>('')
  const [Users, setUsers] = useState<
    { name: string; Id: number; score: number; Imposter: boolean }[]
  >([])
  const theImposter = () => {
    const randomIndex = Math.floor(Math.random() * Users.length)
    Users[randomIndex].Imposter = true
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
    Users.map((user) => (user.Imposter = false))
  }

  const handleRandomName = (randomName: string, names: string[]) => {
    setSelectedQuest(randomName)
    setSelectedStageNames(names)
    setCurrentScreen(Screen.Secret)
  }
  const QustionPage = () => {
    setCurrentScreen(Screen.Question)
  }
  const ResultPage = () => {
    setCurrentScreen(Screen.Result)
  }
  const VotePage = () => {
    setCurrentScreen(Screen.Vote)
  }

  const ImposterPage = () => {
    setCurrentScreen(Screen.Imposter)
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
          setNextScreen={QustionPage}
        />
      )
    case Screen.Question:
      return <QuestionScreen Userz={Users} setNextScreen={VotePage} />
    case Screen.Vote:
      return <VoteScreen Userz={Users} setNextScreen={ImposterPage} />
    case Screen.Imposter:
      return (
        <ImposterScreen
          quest={selectedQuest}
          setNextScreen={ResultPage}
          selectedStage={selectedStageNames}
          Userz={Users}
        />
      )
    case Screen.Result:
      return <ResultScreen Userz={Users} setNextScreen={handlenewGame} />
    default:
      return <p>Loading</p>
  }
}
export default App
