
import { Link } from "react-router-dom"
import "/src/index.css"
export default function Container() {
    return(
        <>
            <div className="header-container">
            <div className="firstcontainer">
               <Link to={"/onboarding"}><h1>montra</h1></Link>
            </div>
          </div>
        </>
    )
}


