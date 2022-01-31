import styles from "./shows.module.css"
import Button from '@mui/material/Button';
import Link from "next/link";
import Image from "next/image";

const Shows = ({shows}) =>{
    return(
        <>
            <section className={`${styles.bg}`}>
                <div className="container ">
                    <div className="row justify-content-center ">
                        <div className="col-lg-8  text-center">
                            <h1 className="text-white pb-2">
                                Checkout the events this year
                            </h1>
                            <Link href={"/shows"}>
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
                    {
                        shows.map(item =>{
                            return(
                                <div className={`col-md-6 col-lg-3 px-0 position-relative`}>
                                    <Link href={`/shows/${item._id}`}>
                                        <a>
                                            <Image
                                                src={`/images/venues/${item.image}`}
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
                                        
                                        </a>
                                    </Link>
                                </div>

                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Shows