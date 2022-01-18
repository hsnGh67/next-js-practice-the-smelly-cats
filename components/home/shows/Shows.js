import styles from "./shows.module.css"
import Button from '@mui/material/Button';
import Link from "next/link";
import Image from "next/image";

const Shows = () =>{
    return(
        <>
            <section className={`${styles.bg}`}>
                <div className="container ">
                    <div className="row justify-content-center ">
                        <div className="col-lg-8  text-center">
                            <h1 className="text-white pb-2">
                                Checkout the events this year
                            </h1>
                            <Link href={"#"}>
                                <Button  
                                    variant="contained"
                                    size="small"
                                >
                                    SEE ALL THE SHOWS
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid">
                <div className="row">
                    <div className={`col-md-6 col-lg-3 px-0 position-relative`}>
                        <Image
                            src={'/images/venues/one.jpg'}
                            width={1920}
                            height={1080}
                            layout="responsive"
                        />
                        <div className={`${styles.eventBoxCaption} text-center`}>
                            <div className="text-white">
                                12-15-2022
                            </div>
                            <div className="text-white">
                                Bob's tavern
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 col-lg-3 px-0 position-relative`}>
                        <Image
                            src={'/images/venues/two.jpg'}
                            width={1920}
                            height={1080}
                            layout="responsive"
                        />
                        <div className={`${styles.eventBoxCaption} text-center`}>
                            <div className="text-white">
                                12-15-2022
                            </div>
                            <div className="text-white">
                                Bob's tavern
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 col-lg-3 px-0 position-relative`}>
                        <Image
                            src={'/images/venues/three.jpg'}
                            width={1920}
                            height={1080}
                            layout="responsive"
                        />
                        <div className={`${styles.eventBoxCaption} text-center`}>
                            <div className="text-white">
                                12-15-2022
                            </div>
                            <div className="text-white">
                                Bob's tavern
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 col-lg-3 px-0 position-relative`}>
                        <Image
                            src={'/images/venues/four.jpg'}
                            width={1920}
                            height={1080}
                            layout="responsive"
                        />
                        <div className={`${styles.eventBoxCaption} text-center`}>
                            <div className="text-white">
                                12-15-2022
                            </div>
                            <div className="text-white">
                                Bob's tavern
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shows