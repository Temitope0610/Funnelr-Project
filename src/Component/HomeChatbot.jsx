import React from 'react'
import chat from './../assets/images/chatbot.png'


const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };


class HomeChatbot extends React.Component{
    render(){
        return(
            <div className='chatbot-con'>
                <div className='row m-0'>
                    <div className='col-md-6 desktop'>
                        <img src={chat} className='chatbot-img'/>
                    </div>
                    <div className='col-md-6 section-text'>
                            <h3 className='sales-text mb-0 small'>chatbot</h3>
                            <p style={{fontSize:'24px'}}><b>Sleep, let <span className='funnelr'>Funnellr</span> do the talking</b></p>
                            <p>Research has shown that online buyers have evolved and respond more to personalised marketing through one on one chatting or messaging.</p>
                            <p>With <span className='funnelr'>Funnellr</span>, you can easily create a chatbot that even while you sleep, chats with people online on your behalf and is up 24/7 to help you sell.</p>
                            <p>Instead of using the traditional lead generation form,you can now build a chatbot that will help you capture leads(names,email address, phone number, etc) from your prospective customers via chats.</p>
                            <button onClick={scrollTop} className='btn btn-chat mt-3 scrollTop'>
                            Chat with Funnellr
                            </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeChatbot;