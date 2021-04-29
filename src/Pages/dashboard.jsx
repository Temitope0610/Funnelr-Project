import React from 'react'
import DashboardNav from '../Component/dashboardNav'
import Dashbody from '../Component/dashbody'
import Dashboardtable from '../Component/Dashboardtable'


class dashboard extends React.Component{
    render(){
        return(
            <div>
                <DashboardNav />

                <Dashbody />

                <Dashboardtable />

            </div>  
        )
    }
}

export default dashboard;