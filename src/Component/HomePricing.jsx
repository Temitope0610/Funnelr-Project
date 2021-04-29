import React from 'react'
import coffee from './../assets/images/coffee.png'


const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

class HomePricing extends React.Component{
    render(){
        return(
            <div className='pricing-con'>
                <div className='row m-0'>
                    <div className='col-md-6 desktop'>
                        <img src={coffee} className='pricing-img' width='600'/>
                    </div>
                    <div className='col-md-6 section-text'>
                            <h1 className='sales-text mb-0 small'>pricing</h1>
                            <h3 className='sales-heading'style={{fontSize:'24px'}}><b>Pay Just Like a Cup of Coffee</b></h3>
                            <p>Imagine if you have an online representation that love to chat thousands of prospective customers online and help convert them into customers.</p>
                            <p>With Funnellr you get all that, build unlimited sales page and much more. Click on the button below to start now.</p>
    
                        <button onClick={scrollTop} className='btn btn-start mt-3'>
                            Start Now
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    
}


export default HomePricing;