import CircularProgress from '@mui/material/CircularProgress';
import style from "./Loading.module.css"

const Loading = ({full}) =>(
    <div className={`${style.container} ${full ? `${style.full}`:''}`}>
        <CircularProgress/>
    </div>
)

export default Loading;