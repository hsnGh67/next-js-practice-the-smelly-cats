import { combineReducers } from "redux";
import { userReducer} from "./user.reducer"
import { notificationReducer} from "./notification.reducer"

const reducers = combineReducers({
    user : userReducer,
    notification : notificationReducer
})

export default reducers