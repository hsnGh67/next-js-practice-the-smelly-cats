import Link from "next/link"
import { useEffect, useState } from "react"

const Header = props =>{
    const [light , setLight] = useState(false)
    useEffect(()=>{
        if(typeof(window)!=="undefined"){
            window.addEventListener("scroll",()=>{
                setLight(window.pageYOffset > 200)
            })
            
        }
    },[])

    return(
        <nav className={`navbar navbar-expand-md fixed-top py-3 ${light?"navbar-light bg-white shadow":"navbar-dark bg-dark"}`}>
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">The Smelly Cats</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsNav">
                    <ul className="navbar-nav  ms-auto">
                        <li className="nav-item">
                            <Link href={"#"}>
                                <a className="nav-link">Shows</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"#"}>
                                <a className="nav-link">Contacts</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/user/sign_in"}>
                                <a className="nav-link">Sign in</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header