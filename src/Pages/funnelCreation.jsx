import React from 'react'
import DashboardNav from '../Component/dashboardNav'
import Funnelbody from '../Component/funnelBody'


class funnelCreation extends React.Component{
    render(){
        return(
            <div>
               <DashboardNav />

               <Funnelbody />
            </div>
        )
    }
}
export default funnelCreation;