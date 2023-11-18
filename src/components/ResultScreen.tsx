function ResultScreen({
  Userz,
  setNextScreen,
}: {
  Userz: { name: string; Id: number; score: number; Imposter: boolean }[]
  setNextScreen: () => void
}) {
  return (
    <>
      <div className="stages">
        {Userz.map((user, index) => (
          <div className="stage" key={index}>
            <p>
              {user.name} - {user.score}
            </p>
          </div>
        ))}
        <button className="next" onClick={() => setNextScreen()}>
          New Game
        </button>
      </div>
    </>
  )
}

export default ResultScreen