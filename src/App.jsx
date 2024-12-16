import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'

function App() {
    const[dogName, setDogName] = useState("")
    const[dogImage, setDogUrl] = useState("")
    const[triggerEffect, setTriggerEffect] = useState(0)
    
    const handleDogname = (event) => {
      setDogName(event.target.value)
    }
   
    useEffect(() => {
      if(triggerEffect >= 1) {
      fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)
      .then((response) => response.json())
        .then((data) => setDogUrl(data.message))
      }
      }, [triggerEffect]);

  

    const handlesubmit = (event) => {
        event.preventDefault();
        setTriggerEffect(triggerEffect + 1)
    }
   
   
      
     

  

    // const handlesubmit = (event) => {
    //     event.preventDefault();
    //     fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)
    //   .then((response) => response.json())
    //     .then((data) => setDogUrl(data.message))
    //    }



  return (
      <>
      <div>
        <form onSubmit={ handlesubmit}>
        <input type='text' placeholder='Dogname'  value={dogName}  onChange={handleDogname} />
        <input type='button' value="Submit"/>
        </form>
        <img  src={dogImage} alt='dogimage'/>
        </div>
      </>
  
  )
}

export default App
