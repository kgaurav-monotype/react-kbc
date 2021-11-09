import { useEffect, useState } from "react"

export default function KBC({data,question,setQuestion,setStop}) {
    const [currentQuestion,setcurrentQuestion] = useState(null);
    const [selectedAnswer,setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    useEffect(()=>{
        setcurrentQuestion(data[question - 1]);
    },[data,question]);

    const handleClick = (a)=>{
        setSelectedAnswer(a);
        setClassName("answer active");
        setTimeout(()=>{
            setClassName(a.correct === true ? "answer correct" : "answer wrong"); 
        },3000);
        setTimeout(()=>{
            if(a.correct){
                setQuestion((prev)=>prev+1);
                setSelectedAnswer(null);
            }else {
                setStop(true);
            }
        },6000);
    } 
    return (
        <div className="kbc">
            <div className="question">{currentQuestion?.question}</div>
            <div className="answers">
                {
                   currentQuestion?.answers.map(a=>(
                    <div className={selectedAnswer === a ? className : 'answer'} onClick={()=>handleClick(a)}>{a.text}</div>
                   )) 
                } 
            </div>
        </div>
    )
}
