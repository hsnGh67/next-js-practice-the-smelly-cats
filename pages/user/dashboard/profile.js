import AdminLayout from "../../../components/ui/adminLayout/Layout.Admin"
import RouteGaurd from "../../../helper/gaurd"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useSelector } from "react-redux"

const Profile = props =>{
    const user = useSelector(state=>state.user)
    
    return (
        <RouteGaurd>
            <AdminLayout>
                <h1>
                    Account
                </h1>
                <div className="form-input mb-3">
                    <TextField
                        label={user.data.firstname?user.data.firstname:"Enter your first name"}
                    />
                </div>
                <div className="form-input mb-3">
                    <TextField
                        label={user.data.firstname?user.data.firstname:"Enter your last name"}
                    />
                </div>    
                <Button
                    variant="contained"
                    primary
                >
                    Edit profile
                </Button>
                <div className="form-input mt-5 mb-3">
                    <TextField
                        label={user.data.email?user.data.email:"Enter your Email"}
                    />
                </div>
                <Button
                    variant="contained"
                    primary
                >
                    Edit Email
                </Button>
            </AdminLayout>
        </RouteGaurd>
    )
}

export default Profile