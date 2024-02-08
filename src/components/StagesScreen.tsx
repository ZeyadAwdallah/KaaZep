import stages from '../utils/Category'

function StagesScreen({
  onGameBack,
  handleRandomName,
}: {
  onGameBack: () => void
  handleRandomName: (randomName: string, name: string[]) => void
}) {
  const getRandomNameFromStage = (stage: string[]): string => {
    const randomIndex = Math.floor(Math.random() * stage.length)
    return stage[randomIndex]
  }

  const getRandomNamesFromStage = (stage: any): string[] => {
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
    const selectedStage = stages.find(
      (stage) => stage.category === selectedCategory
    )
    if (selectedStage) {
      const randomNames = getRandomNamesFromStage(selectedStage)
      const randomName = getRandomNameFromStage(randomNames)

      handleRandomName(randomName, randomNames)
    }
  }

  return (
    <>
      <div className="stages">
        {stages.map((stage, index) => (
          <div className="stage" key={index}>
            <p onClick={() => handleStage(stage.category)}>{stage.category}</p>
          </div>
        ))}
        <button onClick={onGameBack}>ارجع</button>
      </div>
    </>
  )
}
export default StagesScreen
