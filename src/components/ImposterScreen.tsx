import { useState } from 'react'

function ImposterScreen({
  setNextScreen,
  quest,
  selectedStage,
  Userz,
  setUserz,
}: {
  quest: string
  selectedStage: string[]
  setNextScreen: () => void
  Userz: { name: string; Id: number; score: number; Imposter: boolean }[]
  setUserz: React.Dispatch<
    React.SetStateAction<
      { name: string; Id: number; score: number; Imposter: boolean }[]
    >
  >
}) {
  const imposterUser = Userz.find((user) => user.Imposter === true)

  function handelImposterScore(name: string) {
    if (name === quest && imposterUser) {
      const updatedUser = Userz.map((user) =>
        user.Id === imposterUser.Id
          ? { ...user, score: user.score + 100 }
          : user
      )
      setUserz(updatedUser)
    }
    setNextScreen()
  }

  return (
    <>
      {imposterUser && (
        <>
          <h2>{imposterUser.name}</h2>
          <h2>الكلام على ايه</h2>
          <div className="stages">
            {selectedStage.map((name, index) => (
              <div className="stage" key={index}>
                <p onClick={() => handelImposterScore(name)}>{name}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default ImposterScreen
