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
  const imposterUser = Userz.find((user) => user.Imposter === true)
  console.log(imposterUser, Userz)
  function handelImposterScore(name: string) {
    if (name === quest && imposterUser) {
      Userz[imposterUser.Id].score += 100
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
