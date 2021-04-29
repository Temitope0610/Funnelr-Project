import React from 'react'
import avatar from './../assets/images/avatar.png'


class SubHero extends React.Component{
    render(){
        return(
            <div>
                <div className='container'>
                    <div className='subHero-con'>
                        <div className='row'>
                            <div className='col-sm-1 col-2'>
                                <div className='avatar-elipse' style={{backgroundImage: `url(${avatar})`}}></div>
                            </div>
                            <div className='col-sm-11 col-10'>            
                                <div className="mb-4">
                                    <div className='chat' style={{background:'#55D85A'}}> 
                                        Awesome! Here we go.Awesome! Here we go.Awesome! Here we go.
                                        <span className="chat-time">12:45pm</span>
                                    </div>
                                </div>
                                For just a little fee of <span className='funnelr font-weight-bold'>$9.99</span> per month Funnellr  is all yours 
                                     
                            </div>
                        </div>
                        <center>
                            <a href='/typeForm' className='btn btn-pay mt-4 mb-3 p-3'>PAY NOW</a><br/>
                            <a href='' style={{fontSize:'12px',color:'#a2a2a2'}}>try free for 7 days</a>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubHero;