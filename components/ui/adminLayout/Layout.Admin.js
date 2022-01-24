import Link from "next/link"
import styles from "./layout.module.css"

const AdminLayout = (props)=>{
    return(
        <div className="container-fluid">
            <div className={`row ${styles.mainContainer}`}>
                <div className={`col-md-3 col-lg-2 ${styles.rightContainer} d-none d-md-flex flex-column p-0`}>
                    <Link href={"/user/dashboard/profile"}>
                        <a className={`${styles.link}`}>
                            <div className={`${styles.btn}`}>
                                Account
                            </div>
                        </a>
                    </Link>
                    <Link href={"/user/dashboard/shows"}>
                        <a className={`${styles.link}`}>
                            <div className={`${styles.btn}`}>
                                Shows
                            </div>
                        </a>
                    </Link>
                    <Link href={"/user/dashboard/shows/create"}>
                        <a className={`${styles.link}`}>
                            <div className={`${styles.btn}`}>
                                Create show
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="col">
                    {props.children}
                </div>
                <div className={`container-fluid d-md-none position-fixed bottom-0`}>
                    <div className="row bg-dark">
                        <div className="col">
                            <Link href={"/user/dashboard/profile"}>
                                <a className={`${styles.link}`}>
                                    <div className={`${styles.btnTab}`}>
                                        Account
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href={"/user/dashboard/shows"}>
                                <a className={`${styles.link}`}>
                                    <div className={`${styles.btnTab}`}>
                                        Shows
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col">
                            <Link href={"/user/dashboard/shows/create"}>
                                <a className={`${styles.link}`}>
                                    <div className={`${styles.btnTab}`}>
                                    Create show
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLayout