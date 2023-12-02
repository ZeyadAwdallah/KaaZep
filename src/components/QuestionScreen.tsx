import { useState } from 'react'
function QuestionScreen({
  Userz,
  setNextScreen,
}: {
  Userz: { name: string; Id: number; score: number; Imposter: boolean }[]
  setNextScreen: () => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  function idUpdater() {
    let prev: number = currentIndex
    if (currentIndex == Userz.length - 1) {
      const randomIndex = Math.floor(Math.random() * Userz.length)
      if (prev == currentIndex) {
        setCurrentIndex(randomIndex)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    } else {
      prev == Userz.length - 1
        ? setCurrentIndex(prev - 1)
        : setCurrentIndex(prev + 1)
    }
  }

  return (
    <>
      <h2>{Userz[currentIndex].name}</h2>
      <h3>اسأله سؤال يكشفه ارجوك</h3>

      {currentIndex == Userz.length - 1 ? (
        <h2>{Userz[currentIndex - 1].name}</h2>
      ) : (
        <h2>{Userz[currentIndex + 1].name}</h2>
      )}
      <div className="card">
        <button className="next" onClick={() => idUpdater()}>
          اللي بعده
        </button>
        <button className="next" onClick={setNextScreen}>
          صوت
        </button>
      </div>
    </>
  )
}

export default QuestionScreen
