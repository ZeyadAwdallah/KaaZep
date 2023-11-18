import { useState } from 'react'

function SecretScreen({
  Userz,
  quest,
  setNextScreen,
}: {
  Userz: { name: string; Id: number; score: number; Imposter: boolean }[]
  quest: string
  setNextScreen: () => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTextVisible, setIsTextVisible] = useState(false)

  function idUpdater() {
    if (Userz.length - 1 === currentIndex) {
      setNextScreen()
    } else {
      setCurrentIndex(currentIndex + 1)
      setIsTextVisible(false) 
    }
  }

  function Show() {
    setIsTextVisible(true) 
  }

  return (
    <>
      {isTextVisible === false && <h3>Give The Phone To</h3>}
      <h1>{Userz[currentIndex].name}</h1>
      {isTextVisible && (
        <div>
          {Userz[currentIndex].Imposter === false ? (
            <h2>The Word Is: {quest}</h2>
          ) : (
            <h2>You Are The Imposter</h2>
          )}
        </div>
      )}
      {isTextVisible && (
        <div>
          {currentIndex < Userz.length - 1 ? (
            <p>Pass The Phone To {Userz[currentIndex + 1].name}</p>
          ) : (
            <p>You Are The Last one Click Next *_*</p>
          )}
        </div>
      )}
      {isTextVisible && (
        <button className="next" onClick={() => idUpdater()}>
          Next
        </button>
      )}
      {isTextVisible == false && (
        <button className="next" onClick={() => Show()}>
          Word
        </button>
      )}
    </>
  )
}

export default SecretScreen
