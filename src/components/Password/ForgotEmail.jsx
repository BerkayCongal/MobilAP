import { Link } from "react-router-dom"
export default function ForgotEmail() {
    return(
        <>
            <div className="forgotEmail">
                <div className="forgot-main">
                        <img src="/src/img/Email.jpg" alt="" />
                        <div className="email-text">
                            <h2>Your email is on the way</h2>
                            <p>Check your email test@test.com and follow the instructions to reset your password</p>
                        </div>
                        <Link to={"/login"}><button className="inputbtn">Back to Login</button></Link>
                </div>
               
            </div>
        </>
    )
}