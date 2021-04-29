import React, {useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Icon from './Icon'
import funnelr from './../assets/images/funnelr.png'
import ReactDom from 'react-dom'
import avatar from './../assets/images/avatar.png'


class Salesbody extends React.Component{
    constructor(props){
        super()
        this.state={
            openForm:false,
            form:false,
            open:false,
            offer:false,
            openSqueezePage:false,
            squeezePage:false
        }
    }

    closeFormModal =()=>{
        this.setState({openForm:false})
    }

    selectForm = () =>{
        this.setState({form:true})
        this.closeFormModal()
    }
    closeModal =()=>{
        this.setState({open:false})
    }

    selectOffer = () =>{
        this.setState({offer:true})
        this.closeModal()
    }
    closeSqueezePageModal =()=>{
        this.setState({openSqueezePage:false})
    }

    selectsqeezePage = () =>{
        this.setState({squeezePage:true})
        this.closeSqueezePageModal()
    }
    render(){
        return(
            <div className='salesbody-con'>
                <div className='container-fluid'>
                    <div className='row'>
                        <nav className='col-3' style={{background:'#fff',height:'700px'}} id='sideBar'>
                            <ul className='nav nav-pills flex-column mt-3'>
                                <li><a href='#squeezePage'><Icon icon='form' fill="#fff" /><span className='ml-2'style={{fontSize:'16px',color:'#222222',textDecoration:'none'}}>Squeeze Page</span></a></li>
                                <li><a href='#form'><Icon icon='thread line' fill="#fff" /><span className='ml-3'style={{color:'#707070',cursor:'pointer'}}>Form</span></a></li>
                                <li><a href='#offer'><Icon icon='thread line' fill="#fff" /><span className='ml-3'style={{color:'#707070',cursor:'pointer'}}>Offer</span></a></li>
                                <li><a href='#page'><Icon icon='thread line' fill="#fff" /><span className='ml-3'style={{color:'#707070',cursor:'pointer'}}>Page</span></a></li><hr/>
                                <li><a href='#salesPage'><Icon icon='form' fill="#fff" /><span className='ml-2'style={{fontSize:'16px',color:'#222222'}}>Sales Page</span></a></li>
                                <li><a href='#salesPage-page'><Icon icon='thread line' fill="#fff" /><span className='ml-3'style={{color:'#707070',cursor:'pointer'}}>Page</span></a></li><hr/>
                                <li><a href='#orderPage'><Icon icon='form' fill="#fff" /><span className='ml-2'style={{fontSize:'16px',color:'#222222'}}>Order Page</span></a></li>
                                <li><a href='#orderPage-offer'><Icon icon='thread line' fill="#fff" /><span className='ml-3'style={{color:'#707070',cursor:'pointer'}}>Offer</span></a></li>
                                <li><a href='#paymntMethod'><Icon icon='thread line' fill="#fff" /><span className='ml-3'style={{color:'#707070',cursor:'pointer'}}>Payment Method</span></a></li>
                                <li><a href='#upsell'><Icon icon='thread line' fill="#fff" /><span className='ml-3'style={{color:'#707070',cursor:'pointer'}}>Upsell</span></a></li>
                            </ul>
                        </nav>
                        <div className='col-9'style={{top:'20px'}}>
                            <input type="text" placeholder='Sales funnel name' className='funnel-field'/>
                            <p className='mt-5'style={{color:'#707070'}}>Select Form</p>
                            <div className='mt-3 select-form'>
                            {
                                        this.state.form ?
                                            <div className='table-responsive-lg'>
                                                <table cellPadding='10' cellSpacing='5'style={{width:'100%'}}>
                                                    <tr style={{fontWeight:'bold',color:'#222222',borderBottom:'1px #f5f5f5 solid'}}>
                                                        <th>Name</th>
                                                        <th>Short Code</th>
                                                        <th>Impression</th>
                                                        <th>Reach</th>
                                                        <th>Conversion</th>
                                                    </tr>
                                                    <tr className='mt-5'>
                                                        <td>Price Slash</td>
                                                        <td>23efig</td>
                                                        <td>103</td>
                                                        <td>75</td>
                                                        <td>50</td>
                                                        <td>10%</td>
                                                        <td>06/12/2020</td>
                                                    </tr>
                                                </table>
                                                <div className='row mt-5' style={{width:'500px',margin:'auto'}}>
                                                    <div className='col-sm-1 col-2'>
                                                        <div className='avatar-elipse' style={{backgroundImage: `url(${avatar})`}}></div>
                                                    </div>
                                                    <div className='col-sm-11 col-10'>            
                                                        <div className="mb-4">
                                                            <div className='chat' style={{background:'#55D85A'}}> 
                                                                Great Job! Proceed to select your form
                                                                <span className="chat-time">12:45pm</span>
                                                            </div>
                                                        </div>       
                                                    </div>
                                                </div>
                                            </div>
                                        :
                                            <div>
                                                <center>
                                                    <p>These are leads you desire to collect from your prospects</p>
                                                    <button type="button" className="btn btn-start mt-3" onClick={() => this.setState({openForm:true})}>
                                                    Select Form
                                                    </button>
                                                    <Popup open={this.state.openForm} closeOnDocumentClick onClose={() => this.closeFormModal()}>
                                                        <div>
                                                            <form>
                                                                <input type="text" placeholder='Search by page name or short code' className='search'/>
                                                            </form>
                                                            <div className='table-responsive-lg'>
                                                                <table cellPadding='10' cellSpacing='5'style={{width:'100%'}}>
                                                                    <tr>
                                                                        <th style={{padding:'20px'}}>Name</th>
                                                                        <th style={{padding:'20px'}}>Short Code</th>
                                                                    </tr>
                                                                    <tr className="table-row" onClick={()=>{this.selectForm()}}>
                                                                        <td style={{padding:'20px'}}>Red shoe form</td>
                                                                        <td style={{padding:'20px'}}>23efig</td>
                                                                    </tr>
                                                                    <tr className="table-row"onClick={()=>{this.selectForm()}}>
                                                                        <td style={{padding:'20px'}}>Red Shoe form</td>
                                                                        <td style={{padding:'20px'}}>23efig</td>
                                                                    </tr>
                                                                    <tr className="table-row"onClick={()=>{this.selectForm()}}>
                                                                        <td style={{padding:'20px'}}>Red Dress form</td>
                                                                        <td style={{padding:'20px'}}>23efig</td>
                                                                    </tr>
                                                                    <tr className="table-row"onClick={()=>{this.selectForm()}}>
                                                                        <td style={{padding:'20px'}}>Combo Plan form</td>
                                                                        <td style={{padding:'20px'}}>23efig</td>
                                                                    </tr>
                                                                    <tr><td className='funnelr mt-5'style={{padding:'20px'}}>Create new form</td></tr>
                                                                </table>
                                                            </div>
                                                    </div>
                                                </Popup>
                                                </center>
                                            </div>
                                    } 
                            </div>
                            <p className='mt-5'style={{color:'#707070'}}>Select Offer</p>
                            <div className='select-form'>
                                    {
                                        this.state.offer ?
                                            <div className='table-responsive-lg'>
                                                <table cellPadding='10' cellSpacing='5'style={{width:'100%'}}>
                                                    <tr style={{fontWeight:'bold',color:'#222222',borderBottom:'1px #f5f5f5 solid'}}>
                                                        <th>Name</th>
                                                        <th>Short Code</th>
                                                        <th>Impression</th>
                                                        <th>Reach</th>
                                                        <th>Conversion</th>
                                                        <th>C.R</th>
                                                        <th>Date</th>
                                                    </tr>
                                                    <tr className='mt-5'>
                                                        <td>Price Slash</td>
                                                        <td>23efig</td>
                                                        <td>103</td>
                                                        <td>75</td>
                                                        <td>50</td>
                                                        <td>10%</td>
                                                        <td>06/12/2020</td>
                                                    </tr>
                                                </table>
                                                <div className='row mt-5' style={{width:'500px',margin:'auto'}}>
                                                    <div className='col-sm-1 col-2'>
                                                        <div className='avatar-elipse' style={{backgroundImage: `url(${avatar})`}}></div>
                                                    </div>
                                                    <div className='col-sm-11 col-10'>            
                                                        <div className="mb-4">
                                                            <div className='chat' style={{background:'#55D85A'}}> 
                                                                Great Job! Proceed to select your offer
                                                                <span className="chat-time">12:45pm</span>
                                                            </div>
                                                        </div>       
                                                    </div>
                                                </div>
                                            </div>
                                        :
                                            <div>
                                                <center>
                                                    <p>This is what you want to sell</p>
                                                    <button type="button" className="btn btn-start mt-3" onClick={() => this.setState({open:true})}>
                                                    Select Offer
                                                    </button>
                                                    <Popup open={this.state.open} closeOnDocumentClick onClose={() => this.closeModal()}>
                                                        <div>
                                                            <form>
                                                                <input type="text" placeholder='Search by page name or short code' className='search'/>
                                                            </form>
                                                            <div className='table-responsive-lg'>
                                                                <table cellPadding='10' cellSpacing='5'style={{width:'100%'}}>
                                                                    <tr>
                                                                        <th style={{padding:'20px'}}>Name</th>
                                                                        <th style={{padding:'20px'}}>Short Code</th>
                                                                    </tr>
                                                                    <tr className="table-row" onClick={()=>{this.selectOffer()}}>
                                                                        <td style={{padding:'20px'}}>Price Slash</td>
                                                                        <td style={{padding:'20px'}}>23efig</td>
                                                                    </tr>
                                                                    <tr className="table-row"onClick={()=>{this.selectOffer()}}>
                                                                        <td style={{padding:'20px'}}>Red Shoe</td>
                                                                        <td style={{padding:'20px'}}>23efig</td>
                                                                    </tr>
                                                                    <tr className="table-row"onClick={()=>{this.selectOffer()}}>
                                                                        <td style={{padding:'20px'}}>Red Dress</td>
                                                                        <td style={{padding:'20px'}}>23efig</td>
                                                                    </tr>
                                                                    <tr className="table-row"onClick={()=>{this.selectOffer()}}>
                                                                        <td style={{padding:'20px'}}>Combo Plan</td>
                                                                        <td style={{padding:'20px'}}>23efig</td>
                                                                    </tr>
                                                                    <tr><td className='funnelr mt-5'style={{padding:'20px'}}>Create new offer</td></tr>
                                                                </table>
                                                            </div>
                                                    </div>
                                                </Popup>
                                                </center>
                                            </div>
                                    } 
                            </div>
                            <p className='mt-5'style={{color:'#707070'}}>Select Page</p>
                            <div className='mt-3 select-form'>
                            {
                                        this.state.squeezePage ?
                                            <div className='table-responsive-lg'>
                                                <table cellPadding='10' cellSpacing='5'style={{width:'100%'}}>
                                                    <tr style={{fontWeight:'bold',color:'#222222',borderBottom:'1px #f5f5f5 solid'}}>
                                                        <th>Name</th>
                                                        <th>Type</th>
                                                        <th>URL</th>
                                                        <th>Traffic</th>
                                                        <th>Conversion</th>
                                                        <th>Date</th>
                                                    </tr>
                                                    <tr className='mt-5'>
                                                        <td>Red shoe Landing Page</td>
                                                        <td>Landing</td>
                                                        <td><a href=""> http/funnelr.com/pages-url</a></td>
                                                        <td>75</td>
                                                        <td>1000</td>
                                                        <td>06/12/2020</td>
                                                    </tr>
                                                </table>
                                                <div className='row mt-5' style={{width:'500px',margin:'auto'}}>
                                                    <div className='col-sm-1 col-2'>
                                                        <div className='avatar-elipse' style={{backgroundImage: `url(${avatar})`}}></div>
                                                    </div>
                                                    <div className='col-sm-11 col-10'>            
                                                        <div className="mb-4">
                                                            <div className='chat' style={{background:'#55D85A'}}> 
                                                            Amazing! Click continue to set up your squeeze page
                                                                <span className="chat-time">12:45pm</span>
                                                            </div>
                                                        </div>       
                                                    </div>
                                                </div>
                                            </div>
                                        :
                                            <div>
                                                <center>
                                                    <p>Select a befitting squeeze page for your offer</p>
                                                    <button type="button" className="btn btn-start mt-3" onClick={() => this.setState({openSqueezePage:true})}>
                                                    Select Page
                                                    </button>
                                                    <Popup open={this.state.openSqueezePage} closeOnDocumentClick onClose={() => this.closeSqueezePageModal()}>
                                                        <div>
                                                            <form>
                                                                <input type="text" placeholder='Search by page name' className='search'/>
                                                            </form>
                                                            <div className='table-responsive-lg'>
                                                                <table cellPadding='10' cellSpacing='5'style={{width:'100%'}}>
                                                                    <tr>
                                                                        <th style={{padding:'20px'}}>Name</th>
                                                                        <th style={{padding:'20px'}}>Type</th>
                                                                    </tr>
                                                                    <tr className="table-row" onClick={()=>{this.selectsqeezePage()}}>
                                                                        <td style={{padding:'20px'}}>Price Slash</td>
                                                                        <td style={{padding:'20px'}}>Squeeze</td>
                                                                    </tr>
                                                                    <tr className="table-row"onClick={()=>{this.selectsqeezePage()}}>
                                                                        <td style={{padding:'20px'}}>Red Shoe</td>
                                                                        <td style={{padding:'20px'}}>Squeeze</td>
                                                                    </tr>
                                                                    <tr className="table-row"onClick={()=>{this.selectsqeezePage()}}>
                                                                        <td style={{padding:'20px'}}>Red Dress</td>
                                                                        <td style={{padding:'20px'}}>Squeeze</td>
                                                                    </tr>
                                                                    <tr className="table-row"onClick={()=>{this.selectsqeezePage()}}>
                                                                        <td style={{padding:'20px'}}>Combo Plan</td>
                                                                        <td style={{padding:'20px'}}>Squeeze</td>
                                                                    </tr>
                                                                    <tr><td className='funnelr mt-5'style={{padding:'20px'}}>Create new page</td></tr>
                                                                </table>
                                                            </div>
                                                    </div>
                                                </Popup>
                                                </center>
                                            </div>
                                    }
                            </div>
                    </div>
                    </div>
                </div>
                <div className='dashfooter-con'>
                    <img src={funnelr} className='funnelr-logo'/>
                    <p className='text-center' style={{color:'#707070',fontSize:'12px'}}> &#169; 2020 Funnellr All rights reserved. Designed by Nerdy Eye powered by Dungada Tech Ltd.</p> 
                </div>
            </div>
        )
    }
}


export default Salesbody;