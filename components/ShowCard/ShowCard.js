import { Button, Card , CardContent , CardActions} from "@mui/material"
import Image from "next/image"
import Link from "next/link"


const ShowCard = ({show})=>{
    return(
        <Card>
                <Image
                    src={`/images/venues/${show.image}`}
                    width={1920}
                    height={1080}
                    layout="responsive"
                />
                <CardContent>
                    <h5>
                        {
                            show.title
                        }
                    </h5>
                    <p>
                        {
                            show.excerpt
                        }
                    </p>
                </CardContent>
                <CardActions>
                    <Link href={`/shows/${show._id}`}>
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            See show
                        </Button>
                    </Link>
                </CardActions>
        </Card>
    )
}

export default ShowCard