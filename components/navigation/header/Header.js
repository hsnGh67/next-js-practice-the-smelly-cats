import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector , useDispatch } from "react-redux"
import { userSignOut } from "../../../store/actions/user.action"
import { useRouter } from "next/router"

const Header = props =>{
    const user = useSelector (state => state.user)
    const dispatch = useDispatch()
    const router = useRouter()
    const [light , setLight] = useState(false)
    useEffect(()=>{
        if(typeof(window)!=="undefined"){
            window.addEventListener("scroll",()=>{
                setLight(window.pageYOffset > 200)
            })
            
        }
    },[])

    const signOut = ()=>{
        dispatch(userSignOut())
        router.push("/")
    }

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
                            <Link href={"/user/dashboard/shows"}>
                                <a className="nav-link">Shows</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/contact"}>
                                <a className="nav-link">Contact</a>
                            </Link>
                        </li>
                        {
                            user.auth ?
                            <li className="nav-item">
                                <Link href="/user/dashboard">
                                    <a className="nav-link">Dashboard</a>
                                </Link>
                            </li>:
                            null
                        }
                        {
                            user.auth ?
                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link" onClick={signOut}>Sign out</a>
                                </Link>
                            </li>:
                            <li className="nav-item">
                                <Link href={"/user/sign_in"}>
                                    <a className="nav-link">Sign in</a>
                                </Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header