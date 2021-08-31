import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [billAmount, setBillAmount] = useState(0)
  const [cashAmount, setCashAmount] = useState(0)
  const [noOfNotes, setNoOfNotes] = useState([])
  const [error, setError] = useState("")
  const availableNotes = [2000,500,100,20,10,5,1]
  const calculateChange = ()=>{
    setNoOfNotes([])
    let amountToBeReturned = Number(cashAmount)-Number(billAmount);
    // 2010
    // go over all the available
    console.log(cashAmount,billAmount,amountToBeReturned)
    for (let i = 0; i < availableNotes.length; i++) {
      // no of notes need for the denomination
      const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
      // 2010 / 2000 = 1 || 10 / 500 = 0
  
      // amount left after calculating the number of notes needed
      amountToBeReturned = amountToBeReturned % availableNotes[i];
  
      setNoOfNotes((_notes)=>[..._notes,numberOfNotes])
    }
  }

  const check = (e)=>{
    e.preventDefault()
    
    setError("")
    if(Number(billAmount)<=0)
    {
      setError("Inavlid Bill Amount")
    }
    else if( Number(cashAmount)<=0)
    {
      setError("Invalid Cash Amount")
    }
    if(Number(billAmount)<=Number(cashAmount))
    {
      calculateChange()
    }
    else{
      setError("Go and wash the dish")
    }
  }
  // useEffect(() => {
  // //  console.log(noOfNotes)
  // }, )
  return (
    <div className="App">
      <h1>Cash Register Manager</h1>
      <p>Enter the bill amount and cash given by the customer and know minimum number of notes to return.</p>
      <form onSubmit={(e)=>check(e)}>
      <input type="number"   onChange={(e)=>setBillAmount(e.target.value)} placeholder="Bill Amount"/>
      <input type="number"   onChange={(e)=>setCashAmount(e.target.value)} placeholder="Cash Given"/>
      <button type="submit">Check</button>
      </form>
      {
        error && (<h2>{error}</h2>)
      }
      <h3>Return Change</h3>
      <table>
        <thead>
          <tr><th>
            No of Notes
            </th>
            <td>{noOfNotes && (noOfNotes[0])}</td>
            <td>{noOfNotes && (noOfNotes[1])}</td>
            <td>{noOfNotes && (noOfNotes[2])}</td>
            <td>{noOfNotes && (noOfNotes[3])}</td>
            <td>{noOfNotes && (noOfNotes[4])}</td>
            <td>{noOfNotes && (noOfNotes[5])}</td>
            <td>{noOfNotes && (noOfNotes[6])}</td>
            </tr>
        </thead>
        <tfoot>
          <tr>
            <th>
              Note
            </th>
            <td>
              2000
            </td>
            <td>
              500
            </td>
            <td>
              100
            </td>
            <td>
              20
            </td>
            <td>
              10
            </td>
            <td>
              5
            </td>
            <td>
              1
            </td>
          </tr>
        </tfoot>
      </table>
      
    </div>
  )
}

export default App
