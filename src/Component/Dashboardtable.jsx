import React from 'react'
import Icon from './Icon'
import funnelr from './../assets/images/funnelr.png'


class Dashboardtable extends React.Component{
    render(){
        return(
            <div className='table-con'>
                <div className='container'>
                    <div className='table-head'>
                        {/* <div className='mt-5 trap float-left'>
                        </div> */}
                        <div  className='float-right funnelr mt-5'>View All Funnels</div>
                    </div>
                        <table className='table-offers'>
                            <tr>
                            <th className='th-offers'>Funnel Name</th>
                            <th className='th-offers'>Traffic</th>
                            <th className='th-offers'>Conversion</th>
                            <th className='th-offers'>Reach</th>
                            <th className='th-offers'>Impression</th>           
                            </tr>
                            <tr>
                                <td className='td-offers'>sample funnel title comes in here... <br/>
                                <Icon icon='graphic' fill="#fff" /> <span className='funnelr p-2'style={{fontSize:'10px'}}>view chart</span>
                                <Icon icon='pencil' fill="#fff" /><span className='funnelr p-2'style={{fontSize:'10px'}}>edit</span>
                                <Icon icon='duplicate' fill="#fff" /><span className='funnelr p-2'style={{fontSize:'10px'}}>duplicate</span>
                                <Icon icon='bin' fill="#fff" /><span className='funnelr p-2'style={{fontSize:'10px'}}>trash</span>
                                </td>
                                
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>5</td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>23</td>
                            </tr>
                            <tr>
                                <td className='td-offers'>sample funnel title comes in here...
                                <br/>
                                <Icon icon='graphic' fill="#fff" /> <span className='funnelr p-2'style={{fontSize:'10px'}}>view chart</span>
                                <Icon icon='pencil' fill="#fff" /><span className='funnelr p-2'style={{fontSize:'10px'}}>edit</span>
                                <Icon icon='duplicate' fill="#fff" /><span className='funnelr p-2'style={{fontSize:'10px'}}>duplicate</span>
                                <Icon icon='bin' fill="#fff" /><span className='funnelr p-2'style={{fontSize:'10px'}}>trash</span>
                                </td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>5</td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>23</td>
                            </tr>
                            <tr>
                                <td className='td-offers'>sample funnel title comes in here...
                                <br/>
                                <Icon icon='graphic' fill="#fff" /> <span className='funnelr p-2'style={{fontSize:'10px'}}>view chart</span>
                                <Icon icon='pencil' fill="#fff" /><span className='funnelr p-2'style={{fontSize:'10px'}}>edit</span>
                                <Icon icon='duplicate' fill="#fff" /><span className='funnelr p-2'style={{fontSize:'10px'}}>duplicate</span>
                                <Icon icon='bin' fill="#fff" /><span className='funnelr p-2'style={{fontSize:'10px'}}>trash</span>
                                </td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>5</td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>23</td>
                            </tr>
                            <tr>
                                <td className='td-offers'>sample funnel title comes in here...
                                <br/>
                                <Icon icon='graphic' fill="#fff" /> <span className='funnelr p-2'style={{fontSize:'10px'}}>view chart</span>
                                <Icon icon='pencil' fill="#fff" /><span className='funnelr p-2'style={{fontSize:'10px'}}>edit</span>
                                <Icon icon='duplicate' fill="#fff" /><span className='funnelr p-2'style={{fontSize:'10px'}}>duplicate</span>
                                <Icon icon='bin' fill="#fff" /><span className='funnelr p-2'style={{fontSize:'10px'}}>trash</span>
                                </td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>5</td>
                                <td className='td-offers'>23</td>
                                <td className='td-offers'>23</td>
                            </tr>
                        </table> 
                        <div className='row mt-5 p-3'>
                            <div className='col-md'>
                                <div className='status-card'>             
                                    <div className='row'>
                                        <div className="col-4">
                                            <Icon icon='funnel' fill='#707070'/>
                                        </div>
                                        <div className="col-8">
                                            <h6 style={{color:'#707070',fontSize:'12px'}} className='mb-0'>Total Conversions Made</h6>
                                            <p style={{color:'#707070',fontSize:'30px',fontWeight:'bold'}} className='mb-0'>125M</p>
                                            <a href='' className='funnelr learn' style={{fontSize:'12px'}}>Manage Conversions</a>
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
                                                   <h6 style={{color:'#707070',fontSize:'12px'}} className='mb-0'>Total Offers Created</h6>
                                                   <p style={{color:'#707070',fontSize:'30px',fontWeight:'bold'}} className='mb-0'>12</p>
                                                  <a href='' className='funnelr learn' style={{fontSize:'12px'}}>View Offers</a>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* <div className='col-sm-6 card border-0 conversion-card p-3'>
                            <Icon icon='funnel' fill="#00D005" />
                            <span className='mb-0 move' style={{color:'#a2a2a2'}}> Total Conversion Made</span>
                            <span className='move'style={{color:'#a2a2a2',fontSize:'48px',fontWeight:'bold'}}>&#8358;125M</span>
                            <span className='funnelr move'>Manage Conversions</span>
                            </div>
                            <div className='col-sm-6 card border-0 conversion-card p-3'>
                            <span className='mb-0 move' style={{color:'#a2a2a2'}}> Total Offers Created</span>
                            <span className='move'style={{color:'#a2a2a2',fontSize:'48px',fontWeight:'bold'}}>12</span>
                            <span className='funnelr move'>View Offers</span>
                            </div> */}
                        </div>
                        <div className='row mt-5'>
                            <div className='col-md-6'>
                               <p style={{color:'#a2a2a2'}}>Top Offers</p> 
                               <table className='top-offers'>
                                   <tr>
                                       <th className='top-offers-row'>Name</th>
                                       <th className='top-offers-row'>Short Code</th>
                                       <th className='top-offers-row'>Conversions</th>
                                   </tr>
                                   <tr>
                                        <td>Red sheo landing page</td>
                                        <td>23efig</td>
                                        <td>11k</td>
                                   </tr>
                                   <tr>
                                        <td>Red sheo landing page</td>
                                        <td>23efig</td>
                                        <td>11k</td>
                                   </tr>
                                   <tr>
                                        <td>Red sheo landing page</td>
                                        <td>23efig</td>
                                        <td>11k</td>
                                   </tr>
                                   <tr>
                                        <td>Red sheo landing page</td>
                                        <td>23efig</td>
                                        <td>11k</td>
                                   </tr>
                                   <tr><td className='funnelr'>View all Offers</td></tr>
                               </table>
                            </div>
                            <div className='col-md-6'>
                                <p style={{color:'#a2a2a2'}}>Top Pages</p>
                                <table className='top-offers'>
                                   <tr>
                                       <th className='top-offers-row'>Name</th>
                                       <th className='top-offers-row'>Type</th>
                                       <th className='top-offers-row'>Traffic</th>
                                   </tr>
                                   <tr>
                                        <td>Red sheo landing page</td>
                                        <td>landing</td>
                                        <td>11k</td>
                                   </tr>
                                   <tr>
                                        <td>Red sheo landing page</td>
                                        <td>landing</td>
                                        <td>11k</td>
                                   </tr>
                                   <tr>
                                        <td>Red sheo landing page</td>
                                        <td>landing</td>
                                        <td>11k</td>
                                   </tr>
                                   <tr>
                                        <td>Red sheo landing page</td>
                                        <td>landing</td>
                                        <td>11k</td>
                                   </tr>
                                   <tr><td className='funnelr'>View all Pages</td></tr>
                                   
                               </table>
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
export default Dashboardtable;