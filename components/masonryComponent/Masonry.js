import Masonry from 'react-masonry-css';
import ShowCard from '../ShowCard/ShowCard';
import styles from "./Masonry.module.css"

const MasonryComponent = ({shows})=>{
    
    const breakpointColumnsObj = {
        default: 4,
        1400: 3,
        970: 2,
        600: 1
    };

    return(
        <div className='container pt-3'>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={`${styles.my_masonry_grid}`}
                columnClassName={`${styles.my_masonry_grid_column}`}
            >
                {
                    shows.map(item=>(
                        <ShowCard
                            key={item._id.toString()}
                            show={item}
                        />
                    ))
                }
            </Masonry>
        </div>
    )
}

export default MasonryComponent