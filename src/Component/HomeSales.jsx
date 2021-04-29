import React from 'react'
import chatbot from './../assets/images/chatbot.png'

const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

class HomeSales extends React.Component{
    render(){
        return(
            <div className='sales-funnel-con'>
                <div className='row p-0 m-0'>
                    <div className='col-md-6 p-0'>
                        <div className='sales-img-con'>
                            <img src={chatbot} className='chatbot'/>
                        </div>
                    </div>
                    <div className='col-md-6 section-text'>
                        <h1 className='sales-text mb-0 small'>marketing automation</h1>
                        <h3 className='sales-heading'><b>Sell even while you sleep</b></h3>
                        <p>Companies, Business Owners
                         and Digital Marketing professionals use <span className='funnelr'>Funnellr</span> to increase their sales online through easy to build converting sales funnels.</p>
                        <p>Funnellr manages everything From the point your prospective customers get to know you or become aware of your business to the point they become actual customers.</p>
                        
                        <button  onClick={scrollTop}className='btn btn-start mt-3'>
                                Start Now For Free
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default HomeSales;