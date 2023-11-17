import { Link } from "react-router-dom"
export default function Login() {
    return(
        <>
         <div className="login-container">
            <div className="login-header">
                <Link to={"/onboarding"}><img src="/src/img/arrow-left.jpg" alt="" /></Link>
                <h2>Login</h2>
            </div>
            <div className="signup-main">
                <input type="text" name="email" placeholder="Email" required />
                <div className="password-container">
                    <input className="signupPassword"  type="password" name="password" placeholder="Password"/>
                    <img src="/src/img/show.svg" alt="" />
                </div>
                <Link to={"/onboarding"}><button className="inputbtn">Login</button></Link>
                <Link className="forgot" to={"/forgotpassword"}>Forgot Password?</Link>
                <Link className="SignupLogin" to={"/signup"}>Don’t have an account yet?<p>Sign Up</p></Link>

            </div>
         </div>
        </>
    )
}