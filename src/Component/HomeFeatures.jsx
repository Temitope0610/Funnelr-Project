import React from 'react'
import Icon from './Icon'



class HomeFeatures extends React.Component{
    render(){
        return(
            <div className='features-con'>
                <h1 className='text-center mb-0 mt-5'>What You Can Do With</h1>
                <h5 className='text-center'><span className='funnelr'>Funnellr</span></h5>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4 col-6 lead-capture-con'>
                                <div className='lead-capture'>
                                    <p><b>Lead Capture Chatbot</b></p>
                                    <Icon icon='bot' fill="#fff" />
                                </div>
                            </div>
                            <div className='col-md-4 col-6 lead-capture-con '>
                                <div className='lead-capture lead-capture2'>
                                    <p><b>Unlimited Sales Page</b></p>
                                    <Icon icon='sale' fill="#fff" />
                                </div>
                            </div>
                            <div className='col-md-4 col-6 lead-capture-con'>
                                <div className='lead-capture'>
                                    <p><b>Automated Sales</b></p>
                                    <Icon icon='funnel' fill="#000" />
                                </div>
                            </div>
                            <div className='col-md-4 col-6 lead-capture-con'>
                                <div className='lead-capture lead-capture2'>
                                    <p><b>Offer Management</b></p>
                                    <Icon icon='offer' fill="#fff" />
                                </div>
                            </div>
                            <div className='col-md-4 col-6 lead-capture-con'>
                                <div className='lead-capture'>
                                    <p><b>Prospect Follow-up</b></p>
                                    <Icon icon='prospect' fill="#fff" />
                                </div>
                            </div>
                            <div className='col-md-4 col-6 lead-capture-con'>
                                <div className='lead-capture lead-capture2'>
                                    <p><b>Activity Tracking</b></p>
                                    <Icon icon='activity-tracker' fill="#fff" />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        )
    }
}

export default HomeFeatures;