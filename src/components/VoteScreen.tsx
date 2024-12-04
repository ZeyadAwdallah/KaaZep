import { useState } from 'react'

function VoteScreen({
  Userz,
  setNextScreen,
  setUserz,
}: {
  Userz: { name: string; Id: number; score: number; Imposter: boolean }[]
  setNextScreen: () => void
  setUserz: React.Dispatch<
    React.SetStateAction<
      { name: string; Id: number; score: number; Imposter: boolean }[]
    >
  >
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  function ScoreUpdater(index: number) {
    setCurrentIndex((prevIndex) => {
      // Use prevIndex to ensure correct user updates
      const updatedUser = Userz.map((user, i) => {
        if (i === prevIndex && Userz[index].Imposter) {
          return { ...user, score: user.score + 100 }
        }
        return user
      })
      setUserz(updatedUser) // Save updated scores

      if (prevIndex + 1 >= Userz.length) {
        setNextScreen()
      }
      return prevIndex + 1
    })
  }

  return (
    <>
      <div className="stages">
        {currentIndex < Userz.length && (
          <>
            <h1>{Userz[currentIndex].name}</h1>
            <h2>مين الكوز</h2>
            {Userz.map(
              (user, index) =>
                index !== currentIndex && (
                  <div className="stage" key={index}>
                    <p onClick={() => ScoreUpdater(index)}>{user.name}</p>
                  </div>
                )
            )}
          </>
        )}
      </div>
    </>
  )
}

export default VoteScreen
