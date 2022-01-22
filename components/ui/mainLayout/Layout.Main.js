import styles from "./layout.module.css"
import Header from "../../navigation/header/Header"
import Footer from "../../navigation/footer/Footer"
import { useEffect } from 'react';
import { useSelector , useDispatch} from "react-redux";
import { ToastContainer } from 'react-toastify';
import {clearNotification} from "../../../store/actions/notification.action"
import {showToast} from "../../../helper/functions"

const MainLayout = props =>{
    const notification = useSelector(state=>state.notification)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        if(notification.success){
            showToast("SUCCESS",notification.msg)
        }   
        if(notification.error){
            showToast("ERROR",notification.msg)
        }
        clearNotification()
    },[notification])

    return(
        <div className={`${styles.container}`}>
            <Header/>
            <div style={{minHeight  : "100vh"}}>
                {props.children}
            </div>
            <ToastContainer />
            <Footer/>
        </div>
    )
}

export default MainLayout