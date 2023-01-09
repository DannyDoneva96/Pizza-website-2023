import { Link } from 'react-router-dom'
import "./ContactUs.css"
import girl from "../../images/Donevi's Pizzeria.png"
export const ContactUs = (props) => {



    return (


        <main>
            <div className="container-Contact">
                <div className="cont-contact">
                    <div className="pizza-girl-img">
                        <img src={girl} alt="" />
                    </div>
                    <div className="formC">
                        <form className="form-c">
                            <label htmlFor="fname">Full Name</label>
                            <input type="text" name="fname" />
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" />
                            <label htmlFor="message">Message</label>
                            <textarea type="text" name="message" />
                            <button className="sbm-btn" type="submit" name="btn">
                                SEND
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )

}