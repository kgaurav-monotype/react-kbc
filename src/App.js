import { useState } from 'react';
import './app.css';

function App() {
  const [question,setQuestion] = useState(1);
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
      <div className="main">Main</div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyArr.map(m=>(
            <li className={question == m.id ? "moneyListItem active" : "moneyListItem"}>
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
