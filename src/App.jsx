import { useState } from 'react'
import './App.css'
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './Components/Firebase/firebase.utils'


function App() {
  const [stateUser, setStateUser] = useState(null)


  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const fbProvider = new FacebookAuthProvider();

  const handelGoogleBtn = () =>{
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      setStateUser(user);
    })

    .catch(error => console.log(error))
  }
  const handelGithubBtn = () =>{
    signInWithPopup(auth, githubProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      setStateUser(user);
    })

    .catch(error => console.log(error))
  }
  const handelFbBtn = () =>{
    signInWithPopup(auth, fbProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      setStateUser(user);
    })

    .catch(error => console.log(error))
  }

  const handelSignOutBtn = () =>{
    signOut(auth)
    .then((out) => {
      console.log(out);
      setStateUser(null)
      
    })
    .catch(error => console.log(error))
  }




  return (
    <>
      <h1>Login Now</h1>

      <button onClick={handelGoogleBtn}>Google Login</button>
      <button onClick={handelGithubBtn}>Github Login</button>
      <button onClick={handelFbBtn}>FaceBook Login</button>
      <button onClick={handelSignOutBtn}>Sign Out</button>

      {
        stateUser &&
        <div>
          <h1>Name : {stateUser.displayName}</h1>
          <h3>Email : {stateUser.email}</h3>
          <img src={stateUser.photoURL} alt="" />
        </div>
      }
    </>
  )
}

export default App
