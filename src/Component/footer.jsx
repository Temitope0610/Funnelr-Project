import React from 'react'
import Funnelr from './../assets/images/funnell.png'



class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <div className='footer-con section-text'>
                    
                        <img src={Funnelr} className='funnelr-logo' />
                        <p className='footer-text mt-3 text-center'>Funnellr is a marketing application that helps individuals, businesses and large organisation increase their online sales. It makes it easy for anyone without digital marketing knowledge implement working sales and techniques used by professional digital marketers on a simple click. </p>
                        <ul className='footer-list mt-3 text-center'>
                            <li>info@funnellr.com</li>
                            <li>08127 724 4042</li>
                        </ul>
                        <ul className='footer-list mt-3 text-center'> 
                            <li>Terms of Service</li>
                            <li>Affiliates</li>
                            <li>Academy</li>
                            <li>Events</li>
                        </ul>
                    
                </div>
                <div className='sticky-footer p-3 text-center'>
                       <p> &#169; 2020 Funnellr All rights reserved. Designed by Nerdy Eye powered by Dungada Tech Ltd.</p> 
                </div>
            </div>
        )
    }
    
}


export default Footer;