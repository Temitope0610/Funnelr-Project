import React from 'react'
import Logo from './../assets/images/funnellr.png'
import Icon from './Icon'




class HomeNavbar extends React.Component{
    menu=()=>{
        let x= document.getElementById('menudot').classList.toggle('menu-item-show');
        console.log(x)
    }
 
    handleBlur = (e) => {
        console.log('on blur')
        this.setState({menuVisible: false})
      }
    render(){
        return(
            <div className='Navbar'>
                <div className='container'>
                    <div className="float-left">
                        <div className="float-left">
                            <div className='chat-logo' style={{backgroundImage:`url(${Logo})`}}></div>
                        </div>
                        <div className="float-left mt-3 ml-2 text-white">
                            <span><b>Funnellr</b></span><br/><span className="small online">online</span>
                        </div>
                    </div>

                    <div className="float-right mt-3">
                        <a href="" className="login mr-2">Log in</a>
                        <button onClick={()=>{this.menu()}} className='unstyled-btn'><Icon icon='menu-dot' fill="#fff" /></button>
                        <div className='menu-item-con shadow-sm' id="menudot" onBlur={this.handleBlur}>
                            <ul className='menu-item'> 
                                <li className='mb-2'>About</li>
                                <li className='mb-2'>Contact</li>
                                <li className='mb-2'>FAQ</li>
                            </ul>
                            <a href='/signup' className='btn btn-signup p-2'>Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeNavbar;