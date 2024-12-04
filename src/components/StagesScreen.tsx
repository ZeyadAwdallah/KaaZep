import { useState, useEffect } from 'react'
import CustomizeScreen from './CustomizeScreen'
import {
  saveStagestoLocalStorage,
  loadStagesFromLocalStorage,
} from '../utils/storage'

interface Category {
  category: string
  names: string[]
}

interface StagesScreenProps {
  onGameBack: () => void
  handleRandomName: (randomName: string, names: string[]) => void
}

function StagesScreen({ onGameBack, handleRandomName }: StagesScreenProps) {
  const [currentStages, setCurrentStages] = useState<Category[]>([])
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

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const getRandomNamesFromStage = (stage: Category): string[] => {
    const namesCopy = [...stage.names]
    const shuffled = shuffleArray(namesCopy)
    return shuffled.slice(0, 5)
  }

  const handleStage = (selectedCategory: string) => {
    const selectedStage = currentStages.find(
      (stage) => stage.category === selectedCategory
    )
    if (selectedStage) {
      const randomNames = getRandomNamesFromStage(selectedStage)
      const randomName = randomNames[Math.floor(Math.random() * 5)]
      handleRandomName(randomName, randomNames)
    }
  }

  const handleCustomize = () => {
    setIsCustomizing(true)
  }

  const handleSaveChanges = (updatedStages: Category[]) => {
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
