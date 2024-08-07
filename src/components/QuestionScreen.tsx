import { useState } from 'react'
function QuestionScreen({
  Userz,
  setNextScreen,
}: {
  Userz: { name: string; Id: number; score: number; Imposter: boolean }[]
  setNextScreen: () => void
}) {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [playerOne, setPlayerOne] = useState(0)
  const [playerTwo, setPlayerTwo] = useState(1)

  function idUpdater() {

    if (currentIndex == Userz.length) {
      let randomIndexI = getRandomIndex();
      let randomIndexII = getRandomIndex();

      while (
        randomIndexI === randomIndexII ||
        (playerOne === randomIndexI && playerTwo === randomIndexII)
      ) {
        randomIndexI = getRandomIndex();
        randomIndexII = getRandomIndex();
      }

      setPlayerOne(randomIndexI);
      setPlayerTwo(randomIndexII);
    }

    else {
      if (currentIndex < Userz.length - 1) {
        setPlayerOne(currentIndex)
        setPlayerTwo(currentIndex + 1)
        setCurrentIndex(currentIndex + 1)
      } else {
        setPlayerOne(currentIndex)
        setPlayerTwo(0)
        setCurrentIndex(currentIndex + 1)
      }

    }
  }
  function getRandomIndex() {
    return Math.floor(Math.random() * Userz.length);
  }

  return (
    <>
      <h2>{Userz[playerOne].name}</h2>
      <h3>اسأله سؤال وحاول توقعة</h3>
      <h2>{Userz[playerTwo].name}</h2>
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
