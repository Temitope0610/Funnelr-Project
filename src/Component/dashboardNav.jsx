import React from 'react'
import Logo from './../assets/images/funnelr.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


class dashboardNav extends React.Component{
    render(){
        return(
            <div className='dash-nav'>
                <div className='container'>
                    <div className="float-left">
                        <img src={Logo}  className='dash-logo' />
                    </div>
                    <ul className='dash-menu desktop float-left' id='d-menu'>
                    <button class="btn close mobile" onclick="mobile()">&times;</button>
                        <li><a href="/funnelCreation"> Funnel</a></li>
                        <li><a href="/chatbotCreation"> Chatbot </a></li>
                        <li><a href="/formsPage">Forms</a></li>
                        <li>Pages</li>
                        <li>Offers</li>
                        <li>Conversion</li>
                    </ul>
                    <FontAwesomeIcon icon={faBars} className='mobile float-right mt-3' style={{margin:'15px'}}onClick="mobile()" />
                    <span className='float-right desktop mt-2'>username</span>
                    <div className='float-right desktop username-logo mr-2'>U</div>
                  
                   
                </div>
            </div>
        )
    }
}
export default dashboardNav;