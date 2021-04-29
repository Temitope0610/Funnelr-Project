import React from 'react'
import Icon from './../Component/Icon'


class SubNav extends React.Component{
    render(){
        return(
            <div className='signup-nav'>
                <div className='container'>
                    <div className='float-right mt-3'>
                        <Icon icon='menu-dot' fill="#fff" />
                    </div>
                    <div className='signup font-weight-bold'>
                        <p style={{fontSize:'18px',padding:'15px'}}><b>Subscription</b></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubNav;