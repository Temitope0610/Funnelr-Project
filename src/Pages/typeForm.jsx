import React from 'react'
import avatar from './../assets/images/avatar.png'
import typewriter from './../assets/images/typewriter.png'

class typeform extends React.Component{
    render(){
        return(
            <div className='typeform-con'>
                <div className='typeform' style={{backgroundImage:`url(${typewriter})`}}>
                    <div className=''>
                        <div className='row'>
                            <div className='col-sm-1 col-1'>
                                <div className='avatar-elipse' style={{backgroundImage: `url(${avatar})`}}></div>
                            </div>
                            <div className='col-sm-11 col-11'>            
                                <div className="mb-4">
                                    <div className='chat' style={{background:'#55D85A'}}> 
                                        Awesome! Here we go.
                                        <span className="chat-time">12:45pm</span>
                                    </div>
                                </div>
                                     
                            </div>
                        </div>
                        <p className=''style={{color:'#707070',fontSize:'18px',marginTop:'70px'}}>1. What is Your Business Name?</p>
                        <input type="text" placeholder='Type your answer here....' className='mt-3 chatbot-form'/>
                        <a href="#second" className='btn btn-start mt-5'>NEXT</a>
                    </div>
                </div>
                <div className='typeform' id='second' style={{backgroundImage:`url(${typewriter})`}}>
                    <p className=''style={{color:'#707070',fontSize:'18px',marginTop:'70px'}}>2. What is Your address?</p>
                    <input type="text" placeholder='Type your answer here....' className='mt-3 chatbot-form'/>
                    <a href="#third" className='btn btn-start mt-5'>NEXT</a>
                </div>
                <div className='typeform' id='third' style={{backgroundImage:`url(${typewriter})`}}>
                    <p className=''style={{color:'#707070',fontSize:'18px',marginTop:'70px'}}>3. What is Your location?</p>
                    <input type="text" placeholder='Type your answer here....' className='mt-3 chatbot-form'/>
                    <a href="#fourth" className='btn btn-start mt-5'>NEXT</a>
                </div>
                <div className='typeform' id='fourth' style={{backgroundImage:`url(${typewriter})`}}>
                    <p className=''style={{color:'#707070',fontSize:'18px',marginTop:'70px'}}>4. What is Your location?</p>
                    <input type="text" placeholder='Type your answer here....' className='mt-3 chatbot-form'/>
                    <a href="#fifth" className='btn btn-start mt-5'>NEXT</a>
                </div>
                <div className='typeform' id='fifth' style={{backgroundImage:`url(${typewriter})`}}>
                    <p className=''style={{color:'#707070',fontSize:'18px',marginTop:'70px'}}>5. What is Your location?</p>
                    <input type="text" placeholder='Type your answer here....' className='mt-3 chatbot-form'/>
                    <a href="/funnelCreation" className='btn btn-start mt-5'>CONTINUE</a>
                </div>
            </div>
        )
    }
}

export default typeform;