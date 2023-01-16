import pizza from "../../images/login-removebg-preview.png"
import './Register.css'
export const Register = (props) =>{

    return (<div className="container-login">
    <div className="content-login">
      <section className="section-login">
        <img src={pizza} alt="" />
        <h1>WELCOME TO THE REGISTER FORM</h1>
        <form action="">
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
          <div>
            <i className="fa-solid fa-lock" />
            <input
              className="inp-log"
              type="password"
              name="repeat-password"
              placeholder="repeat password"
              id="repeat-password"
            />
          </div>
          <p className="perr">err</p>
          <button className="btn-login" type="submit">
            REGISTER
          </button>
        </form>
      </section>
    </div>
  </div>)
}