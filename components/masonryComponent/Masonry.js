import Masonry from 'react-masonry-component';
import ShowCard from '../ShowCard/ShowCard';
import styles from "./Masonry.module.css"



const MasonryComponent = ({shows})=>{
    
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
    };

    return(
        <div className='container'>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={`${styles.my_masonry_grid}`}
                columnClassName={`${styles.my_masonry_grid_column}`}
            >
                {
                    shows.map(item=>(
                        <ShowCard
                            show={item}
                        />
                    ))
                }
            </Masonry>
        </div>
    )
}

export default MasonryComponent