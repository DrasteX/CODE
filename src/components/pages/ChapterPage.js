
import { useParams } from 'react-router-dom'
import { useState, useEffect, React } from 'react';
import Markdown from 'react-markdown';
import cidx from '../../CourseIndex.json'


export default function ChapterPage({lang}) {
  let [mdxtext, settext] = useState();

  
  
  
  
  let {chno}=useParams();
 
  
  useEffect(() => {

    const fetchMDX = async ()=>{
      try {
        let res = await fetch(`/course/${lang}/${lang}-${chno}.mdx`);
        let text = await res.text()
        
        settext(text)
      } catch(err){
        console.error('Error fetching MDX : ', err)
        settext("# CHAPTER NOT FOUND :(")
      }
        
    }
    fetchMDX()
  }, [lang, chno])
  
  
  

  let title = cidx[lang][chno]
  
  return (
    <main>
        <div className="CP_title">
            <span id="CP_heading">{title}</span>
        </div>
        <div className="CP_content">
            <Markdown>{mdxtext}</Markdown>
        </div>
    </main>
  )
}
