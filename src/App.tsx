import React from 'react';
import { Hello } from "./components/Hello"
import { Form } from './components/Form';
import './App.css';

function App() {

  const [serverData, setServerData] = React.useState([])

  React.useEffect(() => {
    fetch("http://35.174.154.56:4000")
    .then(res => res.json())
    .then(data => setServerData(data))
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
       <Hello firstName='Ilan' lastName='Vaks' />
       <Form/>
        {/* @ts-ignore */}
        {serverData && serverData.map(eachDog => <p>{eachDog.name} - {eachDog.age}</p>)}
      </header>
    </div>
  );
}

export default App;
