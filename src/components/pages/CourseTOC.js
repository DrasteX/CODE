import React from 'react'
import { useNavigate } from 'react-router-dom'
import cidx from '../../CourseIndex.json'



export default function CourseTOC(props) {
  let navigate = useNavigate()
  let course_data
  if (props.lang === "python"){
    course_data=cidx.python
  } else if (props.lang === "javascript") {
    course_data=cidx.javascript
  } else if (props.lang === "c++") {
    course_data=cidx['c++']
  }
  
  
  let btnList = Object.entries(course_data).map((item, idx)=>(<button className="ctoc_tocitem" onClick={()=>{navigate(`/${props.lang}/chapter/${item[0]}`)}}>{item[0]}. {item[1]}</button>))
  
  return (
    <main>
        <div className="ctoc_title">
            <span id="ctoc_heading">{props.lang.toLocaleUpperCase()} COURSE</span>
        </div>
        <div className="ctoc_tocContainer">
            {btnList}
        </div>
    </main>
  )
}
