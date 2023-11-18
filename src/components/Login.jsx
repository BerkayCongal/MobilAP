import { Link } from "react-router-dom"
import { useState } from "react"

export default function Login() {

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
         <div className="login-container">
            <div className="login-header">
                <Link to={"/onboarding"}><img src="/src/img/arrow-left.jpg" alt="" /></Link>
                <h2>Login</h2>
            </div>
            <div className="signup-main">
                <input type="text" name="email" placeholder="Email" required />
                <div className="password-container">
                    <input className="signupPassword" type={showPassword ? "text" :"password"} value={password} onChange={handleToggleShow} name="password" placeholder="Password" required/>
                    <img src="/src/img/show.svg" onClick={handleToggleShowPassword}></img> 
                </div>
                <Link to={"/home"}><button className="inputbtn">Login</button></Link>
                <Link className="forgot" to={"/forgotpassword"}>Forgot Password?</Link>
                <Link className="SignupLogin" to={"/signup"}>Don’t have an account yet?<p>Sign Up</p></Link>             
            </div>
         </div>
        </>
    )
}

{/* <input className="signupPassword" type={showPassword ? "text" : "password"} value={password}  name="password" onChange={handleToggleShow}  placeholder="Password"  required/>
                    <img src="/src/img/show.svg" onClick={handleToggleShowPassword}></img>  */}