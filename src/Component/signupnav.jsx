import React from 'react'
import Icon from './../Component/Icon'



class signupnav extends React.Component{
    render(){
        return(
            <div className='signup-nav'>
            <div className='container'>
                    <div className='float-left mt-3'>
                        <a href='/'><Icon icon='back' fill="#fff" /></a>    
                    </div>
                    <div className='float-right mt-3'>
                    <Icon icon='menu-dot' fill="#fff" />
                </div>
                <div className='signup'>
                    <p style={{fontSize:'18px',padding:'15px'}}><b>Sign up</b></p>
                </div>
            </div>
        </div>
        )
    }
}

export default signupnav; 