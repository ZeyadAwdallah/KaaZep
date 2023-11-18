import { useState } from 'react'
function VoteScreen({
  Userz,
  setNextScreen,
}: {
  Userz: { name: string; Id: number; score: number; Imposter: boolean }[]
  setNextScreen: () => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  function idUpdater(index:number) {
    if(Userz[index].Imposter==true){
      Userz[currentIndex].score = Userz[currentIndex].score + 100;
    }
    setCurrentIndex(currentIndex + 1)
    Userz.length - 1 == currentIndex && setNextScreen()
  }

  return (
    <>
      <div className="stages">
        <h1>{Userz[currentIndex].name}</h1>
        <h2>Who Is The Imposter</h2>
        {Userz.map(
          (user, index) =>
            index != currentIndex && (
              <div className="stage" key={index}>
                <p onClick={()=>idUpdater(index)}>{user.name}</p>
              </div>
            )
        )}
      </div>
    </>
  )
}

export default VoteScreen
