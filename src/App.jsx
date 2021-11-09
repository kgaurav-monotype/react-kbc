import { useState } from 'react';
import './app.css';
import KBC from './components/KBC';

function App() {
  const [question, setQuestion] = useState(1);
  const [stop, setStop] = useState(false);

  const data = [
    {
      id:1,
      question:"How many days do we have in a week?",
      answers: [
        {
          text: "Seven",
          correct: true
        },
        {
          text: "Six",
          correct: false
        },
        {
          text: "Four",
          correct: false
        },
        {
          text: "Twelve",
          correct: false
        }
      ]
    },
    {
      id:2,
      question:"How many days are there in a year?",
      answers: [
        {
          text: "356",
          correct: false
        },
        {
          text: "365",
          correct: true
        },
        {
          text: "12",
          correct: false
        },
        {
          text: "7",
          correct: false
        }
      ]
    },
    {
      id:3,
      question:"Which animal is known as the ‘Ship of the Desert?’",
      answers: [
        {
          text: "Cow",
          correct: false
        },
        {
          text: "Horse",
          correct: false
        },
        {
          text: "Camel",
          correct: true
        },
        {
          text: "Deer",
          correct: false
        }
      ]
    },
    {
      id:4,
      question:"In which direction does the sun rise?",
      answers: [
        {
          text: "East",
          correct: true
        },
        {
          text: "West",
          correct: false
        },
        {
          text: "North",
          correct: false
        },
        {
          text: "South",
          correct: false
        }
      ]
    },
    {
      id:5,
      question:"What type of gas do plants absorb?",
      answers: [
        {
          text: "Oxygen",
          correct: false
        },
        {
          text: "Carbon dioxide",
          correct: true
        },
        {
          text: "Nitrogen",
          correct: false
        },
        {
          text: "Hydrogen",
          correct: false
        }
      ]
    }
  ]
  const moneyArr = [
    {id:1, amount: '₹ 5000'},
    {id:2, amount: '₹ 10000'},
    {id:3, amount: '₹ 20000'},
    {id:4, amount: '₹ 50000'},
    {id:5, amount: '₹ 100000'},
    {id:6, amount: '₹ 250000'},
    {id:7, amount: '₹ 500000'},
    {id:8, amount: '₹ 1000000'},
    {id:9, amount: '₹ 1500000'},
    {id:10, amount: '₹ 2000000'},
    {id:11, amount: '₹ 2500000'},
    {id:12, amount: '₹ 5000000'},
    {id:13, amount: '₹ 10000000'},
    {id:14, amount: '₹ 50000000'},
    {id:15, amount: '₹ 75000000'}
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <KBC data={data} question={question} stop={stop} setQuestion={setQuestion} setStop={setStop}/>
        </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyArr.map(m=>(
            <li className={question === m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
