import AdminLayout from "../../components/ui/adminLayout/Layout.Admin"
import RouteGaurd from "../../helper/gaurd"

const Dashboard = props =>{
    return (
        <RouteGaurd>
            <AdminLayout>
                <h1>
                    Dashboard
                </h1>
            </AdminLayout>    
        </RouteGaurd>
    )
}

export default Dashboard