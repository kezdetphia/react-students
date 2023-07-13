



const Score=({students})=>{
  return(
    students.map((s, index)=>(
      <div className="students-score-container" key={index}>
        {
          s.scores.map((score, scoreIndex)=>(
            <div key={scoreIndex}>
              <span>
                Date: {score.date}
              </span>
              <span>
                Score: {score.score}
              </span>

            </div>
          ))
        }
      </div>
    ))
  )
}


export default Score;