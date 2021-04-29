import React from 'react'
import DashboardNav from '../Component/dashboardNav'
import Salesbody from '../Component/salesbody'


class Salesfunnel extends React.Component{
    render(){
        return(
            <div>
                <DashboardNav />

                <Salesbody />
            </div>
        )
    }
}
export default Salesfunnel;