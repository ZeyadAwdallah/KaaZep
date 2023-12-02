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
             اللعيب : {user.name}
            </p>
            <p>
            جاب : {user.score} نقطة
            </p>
          </div>
        ))}
        <button className="next" onClick={() => setNextScreen()}>
          جيم جديد
        </button>
      </div>
    </>
  )
}

export default ResultScreen