import { useState } from 'react'
import './App.css'
import {app, database} from './firebaseconfig'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'


function App() {

  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const auth = getAuth(app);

  const handleInput = (e)=>{

    let inputs = {[e.target.name]: e.target.value}

    setData({...data, ...inputs})
    
  }

  const handleSubmit = ()=>{
    // console.log(data);

    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((response)=>{
      console.log(response.user);
    })
    .catch((error)=>{
      console.log(error);
      alert(error.message);
    })
  }
 

  return (
    <>
      <div>
        <input name='email'  onChange={e=>{handleInput(e)}} className='' placeholder='email' type="text" /> <br />
        <input  onChange={e=>{handleInput(e)}} name='password' placeholder='password' type="password" /><br />
        <button onClick={handleSubmit}>Sign Up</button>
      </div>
    </>
  )
}

export default App
