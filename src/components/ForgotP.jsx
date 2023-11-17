import { Link } from "react-router-dom"
export default function ForgotP() {

    return(
        <div className="forgotPassword">
           <div className="forgot-main">
           <div className="login-header">
                <Link to={"/login"}><img src="/src/img/arrow-left.jpg" alt="" /></Link>
                <h2>Forgot Password</h2>
            </div>
            <div className="forgot-text">
            <h3>Don’t worry. Enter your email and we’ll send you a link to reset your password.</h3>
            </div>
            <div className="signup-main" >
            <input type="text" name="email" placeholder="Email"/>
            </div>
            <Link to={"/forgotemail"}><button className="inputbtn">Continue</button></Link>
           </div>
        </div>
    )
}