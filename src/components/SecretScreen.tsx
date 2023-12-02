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
      {isTextVisible === false && <h3>أدي العدة لـ</h3>}
      <h1>{Userz[currentIndex].name}</h1>
      {isTextVisible && (
        <div>
          {Userz[currentIndex].Imposter === false ? (
            <h2>  الكلمة اهي  :  {quest}</h2>
          ) : (
            <h2>انت الكاذب أحراج والله</h2>
          )}
        </div>
      )}
      {isTextVisible && (
        <div>
          {currentIndex < Userz.length - 1 ? (
            <p>باصي العدة   لـ{Userz[currentIndex + 1].name}</p>
          ) : (
            <p>و كنت الاخير معانا يلا ابدأ</p>
          )}
        </div>
      )}
      {isTextVisible && (
        <button className="next" onClick={() => idUpdater()}>
          اللي بعده
        </button>
      )}
      {isTextVisible == false && (
        <button className="next" onClick={() => Show()}>
          الكلمة يا غالي
        </button>
      )}
    </>
  )
}

export default SecretScreen
