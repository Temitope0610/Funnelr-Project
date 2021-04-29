import React from 'react'
import DashboardNav from '../Component/dashboardNav'



class FormCreation extends React.Component{
    render(){
        return(
            <div>
                <DashboardNav />
                <div className='container'>
                    <div className='subHero-con'style={{maxWidth:'800px'}}> 
                        <div className='templateSelection-con'>
                         <p style={{color:'#707070',fontSize:'16px',fontWeight:'bold'}}>Select Form Type</p>
                         <div className='row'>
                            <div className='card template-card col-4 mr-3'>

                            </div>
                            <div className='card template-card col-4 mr-5'>

                            </div>
                            <div className='card template-card col-4'>

                            </div>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormCreation;