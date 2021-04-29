import React from 'react'
import  FunnelLady from '../assets/images/funnelLady.png'
import funnelr from '../assets/images/funnelr.png'
import Icon from './Icon'

class Funnelbody extends React.Component {
    render() {
        return(
            <div className='salesbody-con'>
                   <div className='container'>
                        <div className='row mt-5'>
                        <div className='col-md-6'>
                                <div style={{backgroundImage: `url(${FunnelLady})`,position:'relative', top:'60px'}} className='funnel-bg'>
                                    
                                </div>
                                <div className='' style={{marginLeft:'200px'}}>
                                <div className='dash-chat mb-3' style={{background:'#152415', position:'relative', top:'-300px'}}>
                                    Hi! My job is to keep you updated on your funnels  
                                </div>
                                <div className='dash-chat mb-3' style={{background:'#152415', position:'relative', top:'-300px'}}>
                                So far, you have generated <span style={{fontWeight:'bold'}}>2.5k</span> traffic with <span style={{fontWeight:'bold'}}>09 </span>funnels resulting to <span style={{fontWeight:'bold'}}> 250</span> conversions.   
                                </div>
                            </div>
                            </div>
                            <div className='col-md-6'>
                                <a href='/salesFunnel' className='btn btn-start float-right'><Icon icon='plus-solid' fill="#fff" />
                                  <span className="ml-2"> Create New Funnel</span>
                                </a>
                                <div className='row float-left'>
                                     <div className='col-md'>
                                        <div className='status-card'>             
                                            <div className='row'>
                                                <div className="col-4">
                                                    <Icon icon='funnel' fill='#707070'/>
                                                </div>
                                                <div className="col-8">
                                                   <h6 style={{color:'#707070',fontSize:'12px'}} className='mb-0'>Conversion Rate</h6>
                                                   <p style={{color:'#707070',fontSize:'30px',fontWeight:'bold'}} className='mb-0'>30.12%</p>
                                                  <a href='' className='funnelr learn' style={{fontSize:'12px'}}>Learn More</a>
                                                </div>
                                               
                                            </div>
                                        </div>
                                     </div>
                                     <div className='col-md'>
                                        <div className='status-card'>
                                        <div className='row'>
                                                <div className="col-4">
                                                    <Icon icon='radar' fill='#707070'/>
                                                </div>
                                                <div className="col-8">
                                                   <h6 style={{color:'#707070',fontSize:'12px'}} className='mb-0'>Traffic Frequency</h6>
                                                   <p style={{color:'#707070',fontSize:'30px',fontWeight:'bold'}} className='mb-0'>1.04</p>
                                                  <a href='' className='funnelr learn' style={{fontSize:'12px'}}>Learn More</a>
                                                </div>
                                               
                                            </div>
                                        </div>
                                     </div>
                                     <div className='w-100'></div>
                                     <div className='col-md'>
                                        <div className='status-card'>
                                        <div className='row'>
                                                <div className="col-4">
                                                    <Icon icon='prospect' fill='#707070'/>
                                                </div>
                                                <div className="col-8">
                                                   <h6 style={{color:'#707070',fontSize:'12px'}} className='mb-0'>Reach</h6>
                                                   <p style={{color:'#707070',fontSize:'30px',fontWeight:'bold'}} className='mb-0'>1.23k</p>
                                                  <a href='' className='funnelr learn' style={{fontSize:'12px'}}>Learn More</a>
                                                </div>
                                               
                                            </div>
                                        </div>
                                     </div>
                                     <div className='col-md'>
                                        <div className='status-card'>
                                        <div className='row'>
                                                <div className="col-4">
                                                    <Icon icon='love' fill='#707070'/>
                                                </div>
                                                <div className="col-8">
                                                   <h6 style={{color:'#707070',fontSize:'12px'}} className='mb-0'>Impression</h6>
                                                   <p style={{color:'#707070',fontSize:'30px',fontWeight:'bold'}} className='mb-0'>1.39k</p>
                                                  <a href='' className='funnelr learn' style={{fontSize:'12px'}}>Learn More</a>
                                                </div>
                                               
                                            </div>
                                        </div>
                                     </div>
                                </div>
                             </div>
                        </div>
                        <p className="mt-5" style={{color:'#707070'}}>All Funnels</p>
                        <table className='table-offers'>
                            <tr>
                            <th className='th-offers'>Name</th>
                            <th className='th-offers'>Traffic</th>
                            <th className='th-offers'>Conversion</th>
                            <th className='th-offers'>Reach</th>
                            <th className='th-offers'>Impression</th> 
                            <th className='th-offers'>C.Rate</th>                     
                            </tr>
                            <tr>
                                <td className='td-offers'>sample funnel title comes in here... <br/>
                                <Icon icon='graphic' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>analyse</a>
                                <Icon icon='pencil' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>edit</a>
                                <Icon icon='duplicate' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>duplicate</a>
                                <Icon icon='bin' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>trash</a>
                                </td>
                                
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>5</td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>-</td>
                            </tr>
                            <tr>
                                <td className='td-offers'>sample funnel title comes in here...
                                <br/>
                                <Icon icon='graphic' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>analyse</a>
                                <Icon icon='pencil' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>edit</a>
                                <Icon icon='duplicate' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>duplicate</a>
                                <Icon icon='bin' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>trash</a>
                                </td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>5</td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>-</td>
                            </tr>
                            <tr>
                                <td className='td-offers'>sample funnel title comes in here...
                                <br/>
                                <Icon icon='graphic' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>analyse</a>
                                <Icon icon='pencil' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>edit</a>
                                <Icon icon='duplicate' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>duplicate</a>
                                <Icon icon='bin' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>trash</a>
                                </td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>5</td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>-</td>
                            </tr>
                            <tr>
                                <td className='td-offers'>sample funnel title comes in here...
                                <br/>
                                <Icon icon='graphic' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>analyse</a>
                                <Icon icon='pencil' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>edit</a>
                                <Icon icon='duplicate' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>duplicate</a>
                                <Icon icon='bin' fill="#fff" /><a href='' className='funnelr learn p-2'style={{fontSize:'10px'}}>trash</a>
                                </td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>5</td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>-</td>
                            </tr>
                           
                        </table> 
                        <div className='dashfooter-con'>
                            <img src={funnelr} className='funnelr-logo'/>
                            <p className='text-center' style={{color:'#707070',fontSize:'12px'}}> &#169; 2020 Funnellr All rights reserved. Designed by Nerdy Eye powered by Dungada Tech Ltd.</p> 
                        </div>
                        
                   </div>
            </div>
        )
    }
}

export default Funnelbody;