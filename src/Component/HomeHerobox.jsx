import React from 'react'
import avatar from './../assets/images/avatar.png'
import Icon from './Icon'
import { Dot } from 'react-animated-dots';
import sound from './../assets/sound.mp3'
import ChatBot from 'react-simple-chatbot'

const chatbot = {
    1:{question:'what is your name', answer:'my name is funnelr'},
    2:{question:'what club do you support', answer:'none actually but I love Chealsea'},
}



class HomeHeroBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            typing:true,
            input:''
        }
    }

    scrollToBottom = () =>{
        document.getElementById('chatMsg').scrollTop =  document.getElementById('chatMsg').scrollHeight
    }

    msgTime = () =>{
        var date = new Date;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

        return strTime;
    }

    formHandler = (e)=>{
        let nam = e.target.name
        let val = e.target.value
        this.setState({[nam]:val})
    }

    typing = (id) =>{

        const msg = `
        <div class='chat-msg-container'>
            <div class='row'>
                <div class='col-sm-1 col-2'>
                    <div class='avatar-elipse' style="background-image: url(${avatar})"></div>
                </div>
                <div class='col-sm-11 col-10'>
                    
                    <div class="mb-3">
                        <div class='chat' >
                            <span id="${id}"> 
                            <div class="typing-indicator dot1"></div>
                            <div class="typing-indicator dot2"></div>
                            <div class="typing-indicator dot3"></div>
                            </span>
                            
                        </div>
                    </div>

                    
                </div>
            </div>

        </div>

        `
        return msg

    }

    userChat = () =>{
        const msg = this.state.input
        if(msg != ''){

    
        const temp = `
        
        <div class='chat-msg-container-2'>
            <div class="mb-5">
                <div class='chat-to'> 
                    ${msg}
                    <span class="chat-time">${this.msgTime()}</span>
                </div>
            </div>
        </div>
        `
        document.getElementById('chatMsg').insertAdjacentHTML('beforeend', temp);

        //reset input area
        this.setState({input:''})


        //scrolltobottom
        this.scrollToBottom()
        }
    }


    from = () =>{
     const msg = `
        <div class='chat-msg-container'>
            <div class='row'>
                <div class='col-sm-1 col-2'>
                    <div class='avatar-elipse' style="background-image: url(${avatar})"></div>
                </div>
                <div class='col-sm-11 col-10'>
                    
                    <div class="mb-3">
                        <div class='chat'> 
                            <div class="typing-indicator dot1"></div>
                            <div class="typing-indicator dot2"></div>
                            <div class="typing-indicator dot3"></div>
                            <span class="chat-time">12:45pm</span>
                        </div>
                    </div>

                    <div class="mb-3">
                        <div class='chat'>
                            Hi! My name is Funnellr    
                            <span class="chat-time">12:45pm</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        `
        return msg
    }

    //handles funnellr messages
    chatbotMsg = (id, msg) =>{
            
        setTimeout(()=>{
            document.getElementById(id).innerHTML=`
                ${msg}
                <span class="chat-time">${this.msgTime()}</span>
                <audio src="${sound}" controls autoplay="autoplay" style="display:none"></audio>
            `
        },1000)

        this.scrollToBottom()
    }

    componentDidMount = () =>{
        const id = Math.random()
        const chatArea =  document.getElementById('chatMsg')
        chatArea.insertAdjacentHTML('afterbegin', this.typing(id));
        this.chatbotMsg(id, 'Hi i am Funnellr')
    }

    render(){
        return(
            <div className='chat-con'>
                
                <div className='container'>

                    <div className='chat-area'  id="chatMsg">
                       
                        {/* <div className='chat-msg-container-2'>
                            <div className="mb-3">
                                <div className='chat-to'> 
                                    Hi!
                                    <span className="chat-time">12:45pm</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className='chat-input-con'>
                        <div className='row'>
                            <div className='col-sm-11 col-10'>
                                <input type='text' onChange={this.formHandler} name='input' value={this.state.input}  className='form-control border-0 chat-input' placeholder='type here....' />
                            
                            </div>
                            <div className='col-sm-1 col-2'> 
                                <div className='send-btn' onClick={this.userChat}>
                                        <Icon icon='send' fill="#fff" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeroBox;