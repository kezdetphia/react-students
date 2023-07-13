import Score from './Score'

const Student=({students})=>{
  return(
    students.map((s, index)=>(
      <div className="students-container" key={index}>
        <span> Name: {s.name }</span>
        <hr />
        <span>Bio: {s.bio }</span>
        <hr />
        <Score students={students}/>
      <hr />
      <hr />

      </div>
    ))
  )
}


export default Student;