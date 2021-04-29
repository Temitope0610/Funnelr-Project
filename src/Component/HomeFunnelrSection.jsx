import React from 'react'
import Icon from './Icon'



class HomeFunnelr extends React.Component{
    render(){
        return(
            <div className='funnelr-section-con'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 funnelr-text'>
                            <p style={{fontSize:'24px'}}><b>Who is <span className='funnelr'>Funnellr</span> for?</b></p>
                            <p className='mt-3'>It is not for everybody but for anybody who wants to make money online by increasing their sales and customers online. Specifically designed for:</p>
                            <div className='funnelr-ladder-con mt-5'>
                                <div className='card border-0 shadow-sm p-3'>
                                <Icon icon='elipse' fill='#707070'/><span className='ml-5'>Small or large scale businesses</span>
                                </div>
                                <div className='card border-0 mt-3 shadow-sm p-3'> 
                                <Icon icon='elipse' fill='#707070'/><span className='ml-5'>Digital Marketing Professionals</span>
                                </div>
                                <div className='card border-0 mt-3 shadow-sm p-3'>
                                <Icon icon='elipse' fill='#707070'/><span className='ml-5'> Marketing Experts</span>
                                </div>
                                <div className='card border-0 mt-3 shadow-sm p-3'>
                                <Icon icon='elipse' fill='#707070'/><span className='ml-5'>Business Owners</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeFunnelr;