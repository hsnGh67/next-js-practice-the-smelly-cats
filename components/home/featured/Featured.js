import styles from "./featured.module.css"

const Featured = props =>{
    return(
        <div className={`container-fluid ${styles.bgContainer}`}>
            <div className="row h-100 justify-content-center align-items-center">
                <div className="text-center text-white font-weight-bold">
                    <h1>
                        Rocking Hard
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Featured