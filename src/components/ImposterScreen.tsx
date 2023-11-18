function ImposterScreen({
  setNextScreen,
  quest,
  selectedStage,
  Userz,
}: {
  quest: string
  selectedStage: string[]
  setNextScreen: () => void
  Userz: { name: string; Id: number; score: number; Imposter: boolean }[]
}) {
  const user = Userz.filter((user) =>user.Imposter == true )
  function handelImposterScore(name: string) {
    if (name == quest) {
      Userz[user[0].Id].score = Userz[user[0].Id].score + 100
    }
     setNextScreen()
  }
  return (
    <>
      <h2>{user[0].name}</h2>
      <h3>What Is the Word</h3>
      <div className="stages">
        {selectedStage.map((name, index) => (
          <div className="stage" key={index}>
            <p onClick={() => handelImposterScore(name)}>{name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default ImposterScreen;
