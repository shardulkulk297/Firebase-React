import { useState } from 'react'
import './App.css'
import {app, database} from './firebaseconfig'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {collection, addDoc, getDocs} from 'firebase/firestore'


function App() {

  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  })
  const auth = getAuth(app);
  const dbInstance = collection(database, 'users');

  const handleInput = (e)=>{

    let inputs = {[e.target.name]: e.target.value}

    setData({...data, ...inputs})
    
  }

  const handleSubmit = ()=>{
    // console.log(data);

    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((response)=>{
      console.log(response.user);

      addDoc(dbInstance, {
        name: data.name,
        phone: data.phone,
        email: data.email,
      })


      alert('User Created Successfully');
    })
    .catch((error)=>{
      console.log(error);
      alert(error.message);
    })
  }

  const handleLogIn = ()=>{
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((response)=>{
      console.log(response.user);
      alert('User Logged In Successfully');
    })
    .catch((error)=>{
      console.log(error);
      alert(error.message);
    })

  }
 
  const addData = ()=>{
    addDoc(dbInstance, data)
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <>
      <div>
        <input name='name' onChange={e=>{handleInput(e)}} className='' placeholder='name' type="text" /> <br />
        <input name='phone' onChange={e=>{handleInput(e)}} className='' placeholder='phone' type="text" /> <br />
        <input name='email'  onChange={e=>{handleInput(e)}} className='' placeholder='email' type="text" /> <br />
        <input  onChange={e=>{handleInput(e)}} name='password' placeholder='password' type="password" /><br />
        <button onClick={handleSubmit}>Sign Up</button>
        <br />
        <button onClick={handleLogIn} type="button" class="btn btn-primary">SignIn</button>
        <button onClick={addData}>Add Data</button>
        
      </div>
    </>
  )
}

export default App
