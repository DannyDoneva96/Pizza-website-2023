import pizza from "../../images/login-removebg-preview.png"
import './Register.css'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  {UserAuth}  from '../../Context/Auth/authContext';
import {getAuth} from 'firebase/auth'

import {
  createUserWithEmailAndPassword,
 
} from 'firebase/auth';


export const Register = (props) => {

  const [registerUser, setRegisterUser] = useState({

    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(undefined)
  
  const auth = getAuth()
   const  {createUser}  = UserAuth();
  const navigate = useNavigate()

  const onChange = (e) => {
    setRegisterUser(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    try {

      if (registerUser.password === registerUser.confirmPassword) {
        await createUser(auth,registerUser.email, registerUser.password);
        navigate('/')
      }
      setError("Passwords dont match")

    } catch (e) {
      console.log(e.message)
      setError(e.message.split('/')[1].split(')')[0]);
    }
  }

  return (<div className="container-login">
    <div className="content-login">
      <section className="section-login">
        <img src={pizza} alt="" />
        <h1>WELCOME TO THE REGISTER FORM</h1>
        <form onSubmit={''}>
          <div>
            <i className="fa-regular fa-user" />
            <input
              className="inp-log"
              type="text"
              name="email"
              placeholder="email"
              id="email"
              onChange={onChange}
              required
            />
          </div>
          <div>
            <i className="fa-solid fa-lock" />
            <input
              className="inp-log"
              type="password"
              name="password"
              placeholder="password"
              id="password"
              onChange={onChange}
              required
            />
          </div>
          <div>
            <i className="fa-solid fa-lock" />
            <input
              className="inp-log"
              type="password"
              name="confirmPassword"
              placeholder="repeat password"
              id="repeat-password"
              onChange={onChange}
              required
            />
          </div>
          <p className="perr">{error}</p>
          <button className="btn-login" type="submit" onClick={onSubmit} >
            REGISTER
          </button >
        </form>
      </section>
    </div>
  </div>)
}