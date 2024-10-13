import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter></Counter>
        <User></User>
      
      </header>
    </div>
  );
}
// counter data 
function Counter (){
  const [count ,setCount] = useState(8)
  // const clickHandlare = () => setCount(count + 1)
    // const newcount = count + 1;
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function User (){
  const [users,setUser] = useState([])
  useEffect(() =>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(responsive  => responsive.json())
    .then(data => setUser(data.pets))
  },[])
  return(
    <div>
      <h1>My all data : {users.length}</h1>
      <ul>
       {users.map(dat => <li>{dat.category}</li>)}
      </ul>
    </div>
  )
}

export default App;
