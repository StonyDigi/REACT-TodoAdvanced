import { useState } from 'react'
import Element from './components/Element'
import React from 'react'
import './App.css'

const App = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [array, setArray] = useState([]);
  
  const addElement = () => {
    setArray([...array, {name:name, email:email, todo:todo, date:date}]);
    setName("");
    setEmail("");
    setTodo("");
    setDate("");
  }
  
  return (
    <div className='App'>
      <div className="container">
        
        <h1>React Teendők</h1>

        <form action='/'>
          
          <div>
            <label>Név</label>
            <input type="text" value={name} onChange={(e) => {
              setName(e.target.value);
              console.log(e.target.value)
            }}/>
          </div>
          
          <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => {
              setEmail(e.target.value);
              console.log(e.target.value)
            }}/>
          </div>
          
          <div>
            <label>Feladat</label>
            <input type="text" value={todo} onChange={(e) => {
              setTodo(e.target.value);
              console.log(e.target.value)
            }}/>
          </div>
          
          <div>
            <label>Dátum</label>
            <input type="date" value={date} onChange={(e) => {
              setDate(e.target.value);
              console.log(e.target.value)
            }}/>
          </div>

          <button type="button" onClick={addElement}>Hozzáadás</button>
        
        </form>
      </div>

            {
              array.map(el => {
                return <Element 
                name={el.name}
                 email={el.email}
                  todo={el.todo}
                   date={el.date} />
              })
            }


    </div>
  )
}

export default App