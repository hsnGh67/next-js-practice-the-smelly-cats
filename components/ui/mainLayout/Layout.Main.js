import styles from "./layout.module.css"
import Header from "../../navigation/header/Header"
import Footer from "../../navigation/footer/Footer"

const MainLayout = props =>{
    return(
        <div className={`${styles.container}`}>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default MainLayout