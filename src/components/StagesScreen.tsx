import { useState, useEffect } from 'react'
import CustomizeScreen from './CustomizeScreen'
import { saveStagestoLocalStorage,loadStagesFromLocalStorage } from '../utils/storage'

interface category {
  category: string
  names: string[]
}

interface StagesScreenProps {
  onGameBack: () => void
  handleRandomName: (randomName: string, name: string[]) => void
}

function StagesScreen({ onGameBack, handleRandomName }: StagesScreenProps) {
  const [currentStages, setCurrentStages] = useState<category[]>([])
  const [isCustomizing, setIsCustomizing] = useState(false)

  useEffect(() => {
    const loadedStages = loadStagesFromLocalStorage()
    if (loadedStages) {
      setCurrentStages(loadedStages)
    } else {
      import('../utils/Category').then((module) => {
        setCurrentStages(module.stages)
      })
    }
  }, [])

  const getRandomNameFromStage = (stage: string[]): string => {
    const randomIndex = Math.floor(Math.random() * stage.length)
    return stage[randomIndex]
  }

  const getRandomNamesFromStage = (stage: category): string[] => {
    let names: string[] = []
    let fake: number = -1
    for (let i: number = 0; i < 5; i++) {
      let randomIndex = Math.floor(Math.random() * stage.names.length)
      if (randomIndex != fake) {
        names.push(stage.names[randomIndex])
      } else {
        randomIndex = randomIndex - 1
        names.push(stage.names[randomIndex])
      }
      fake = randomIndex
    }
    return names
  }

  const handleStage = (selectedCategory: string) => {
    const selectedStage = currentStages.find(
      (stage) => stage.category === selectedCategory
    )
    if (selectedStage) {
      const randomNames = getRandomNamesFromStage(selectedStage)
      const randomName = getRandomNameFromStage(randomNames)
      handleRandomName(randomName, randomNames)
    }
  }

  const handleCustomize = () => {
    setIsCustomizing(true)
  }

  const handleSaveChanges = (updatedStages: category[]) => {
    setCurrentStages(updatedStages)
    saveStagestoLocalStorage(updatedStages)
  }

  if (isCustomizing) {
    return (
      <CustomizeScreen
        initialStages={currentStages}
        onSaveChanges={handleSaveChanges}
        onBack={() => setIsCustomizing(false)}
      />
    )
  }

  return (
    <div className="stages">
      {currentStages.map((stage, index) => (
        <div className="stage" key={index}>
          <p onClick={() => handleStage(stage.category)}>{stage.category}</p>
        </div>
      ))}
      <button onClick={handleCustomize}>عدل او ضيف الحزم</button>
      <button onClick={onGameBack}>ارجع</button>
    </div>
  )
}

export default StagesScreen
