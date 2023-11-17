
import { Link } from "react-router-dom"

export default function Signup() {
    return(
        <>
            <div className="signup-container">
                <div className="signup-header">
                    <Link to={"/onboarding"}><img src="/src/img/arrow-left.jpg" alt="" /></Link>
                    <h2>Sign Up</h2>
                </div>
                <div className="signup-main">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="email" placeholder="Email"/>
                    <div className="password-container">
                        <input className="signupPassword"  type="text" name="password" placeholder="Password"/>
                        <img src="/src/img/show.svg" alt="" />
                    </div>
                    <div className="checkSignup">
                        <span className="passwordCheckbox"></span>
                        <p>By signing up, you agree to the Terms of Service and Privacy Policy</p>
                    </div>
                    <Link to={"/onboarding"}><button className="inputbtn"> Sign Up</button></Link>
                        <h4>Or with</h4>
                    <button className="signup-google"> <img src="/src/img/flat-color-icons_google.svg" alt="" />Sign Up with Google</button>
                    <Link className="SignupLogin" to={"/login"}>Already have an account? <p>Login</p> </Link>
                    {/* ⚛️ */}
                </div>
            </div>
        </>
    )
}