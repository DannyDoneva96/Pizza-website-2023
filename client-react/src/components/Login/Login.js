import pizza from "../../images/login-removebg-preview.png"
import './Login.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { UserAuth } from '../../Context/Auth/authContext';

export const Login = (props) =>{

  const { signIn } = UserAuth();
  let navigate = useNavigate();
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const {
        email,
        password,
    } = Object.fromEntries(new FormData(e.target));

    try {
        await signIn(email, password)
        navigate('/')
    } catch (e) {
        setError(e.message.split('/')[1].split(')')[0]);  
    }


}

    return (<div className="container-login">
    <div className="content-login">
      <section className="section-login">
        <img src={pizza} alt="" />
        <h1>WELCOME </h1>
        <form onSubmit={onSubmit} >
          <div>
            <i className="fa-regular fa-user" />
            <input
              className="inp-log"
              type="text"
              name="email"
              placeholder="email"
              id="email"
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
            />
          </div>
          <p className="perr">{error}</p>
          <button className="btn-login" type="submit">
            LOGIN
          </button>
        </form>
      </section>
    </div>
  </div>)
}