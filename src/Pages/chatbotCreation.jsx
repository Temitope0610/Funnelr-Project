import React from 'react'
import DashboardNav from '../Component/dashboardNav'
import Icon from './../Component/Icon'
import avatar from './../assets/images/avatar.png'
import handemoji from './../assets/images/handemoji.png'
import funnelr from '../assets/images/funnelr.png'


class chatbotCreation extends React.Component{
    render(){
        return(
            <div>
               <DashboardNav />

               <div className='salesbody-con'>
                  <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='image-elipse'>
                                    <Icon icon='face' fill="#fff" />
                                    <p className='mt-2' style={{color:'#707070',fontSize:'12px'}}>Upload Image</p>
                            </div>
                        </div>
                        <div className='col-md-9'>
                        <div className='row mt-5'>
                            <div className='col-md-1 col-1'>
                                <div className='avatar-elipse' style={{backgroundImage: `url(${avatar})`}}></div>
                            </div>
                            <div className='col-md-11 col-11'>            
                                <div className="">
                                    <div className='chat'> 
                                    Create your online chatbot just like me <img src={handemoji} />
                                    </div>
                                </div>        
                            </div>
                        </div>
                        <form className='mt-5'>
                            <input type="text" placeholder='Your Bot Name' className='chatbot-form'/>
                            <input type="text" placeholder='Describe Yourself In One Sentence' className='chatbot-form mt-5'/>
                        </form>
                        <a href=""className='btn btn-start mt-5'>Save</a>
                        </div>
                    </div>
                  </div>
                  <div className='dashfooter-con'>
                        <img src={funnelr} className='funnelr-logo'/>
                        <p className='text-center' style={{color:'#707070',fontSize:'12px'}}> &#169; 2020 Funnellr All rights reserved. Designed by Nerdy Eye powered by Dungada Tech Ltd.</p> 
                   </div>
               </div>
            </div>
        )
    }
}
export default chatbotCreation;