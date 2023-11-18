
import { Link } from "react-router-dom"
import { useState } from "react";

export default function Signup() {
    const [password, setPassword] = useState("");
    const [showPassword, setShotPassword] = useState(true)
    
    
    const handleToggleShow =(e) => {
        setPassword(e.target.value)
    }
    const handleToggleShowPassword = () => {
        setShotPassword(!showPassword)
    }
    
    return(
        <>
            <div className="signup-container">
                <div className="signup-header">
                    <Link to={"/onboarding"}><img src="/src/img/arrow-left.jpg" alt="" /></Link>
                    <h2>Sign Up</h2>
                </div>
                <div className="signup-main">
                    <input type="text" name="name" placeholder="Name"  required/>
                    <input type="email" name="email" placeholder="Email" required/>
                    <div className="password-container">
                    <input className="signupPassword" type={showPassword ? "text" :"password"} value={password} onChange={handleToggleShow} name="password" placeholder="Password" required/>
                    <img src="/src/img/show.svg" onClick={handleToggleShowPassword}></img> 
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