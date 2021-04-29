import React from 'react'
import avatar from './../assets/images/avatar.png'
import Icon from './Icon'
import {Redirect} from 'react-router-dom';


class SignupForm extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            lastname:'',
            email:'',
            phoneno:'',
            password:'',
            lastnameErr: '',
            emailErr:'',
            phonenoErr:'',
            passwordErr:'',
            authoErr: '',
            success:false,
            
        }
    }

    formHandler = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]:val});
    }

    submitHandler = (e) => {
        e.preventDefault();
        const{lastname, email, phoneno, password} = this.state;
        lastname === '' ? this.setState({lastnameErr:'Your lastname is required'}) : this.setState({lastname:''})
        email === '' ? this.setState({emailErr:'email is required'}) : this.setState({email:''})
        phoneno === '' ? this.setState({phonenoErr:'phoneno is required'}) : this.setState({phoneno:''})
        password === '' ? this.setState({passwordErr:'Your password is required'}) : this.setState({password:''})

    if (lastname !== '' && email !== '' && phoneno !== '' && password !== '') {
        this.setState({success:true})
    }
        
    }
    render(){
        const user = localStorage.getItem('user');
            if (user) {
                return <Redirect to="/subscription" />
            }

            if(this.state.success) {
                return <Redirect to="/subscription" />

            }
        return(
            <div className='form-section p-5'>
                <div className='container'>
                    <div className='form-con mt-5'>
                        <div className='row'>
                            <div className='col-sm-1 col-2'>
                                <div className='avatar-elipse' style={{backgroundImage: `url(${avatar})`}}></div>
                            </div>
                            <div className='col-sm-11 col-10'>
                                        
                            <div className="mb-3">
                                <div className='chat'> 
                                    Hi! It will be nice to have you on board.
                                    <span className="chat-time">12:45pm</span>
                                </div>
                                </div>

                                <div className="mb-3">
                                    <div className='signup-chat'>
                                        Even Referral Name” want you to grow your sales with Funnellr   
                                        <span className="chat-time">12:45pm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='form-fill-con mt-5'>
                        <p className='heading'>Fill the form below to create an account easily</p>
                        <form onSubmit={this.submitHandler} action="">
                            <div className='row'>
                                <div className='col-sm-6 mb-5 input-group'>
                                    <span className='input-group-text border-0' id='basic-addon1'><Icon icon='user' fill="#fff" />
                                    </span>
                                    <input type='text' placeholder='Your Last' name="lastname" className='form-control text-field' value={this.state.lastname} onChange={this.formHandler}/>
                                    <p className="error">{this.state.lastnameErr}</p>
                                </div>
                                <div className='col-sm-6 mb-5 input-group'>
                                    <span className='input-group-text border-0' id='basic-addon1'><Icon icon='user' fill="#fff" />
                                    </span>
                                    <input type='text' placeholder='email' name="email"  className='form-control text-field' value={this.state.email} onChange={this.formHandler} />
                                    <p className="error">{this.state.emailErr}</p>
                                </div>
                                <div className='col-sm-6 mb-5 input-group'>
                                    <span className='input-group-text border-0' id='basic-addon1'><Icon icon='user' fill="#fff" />
                                    </span>
                                    <input type='text' placeholder='phone number'name="phoneno"  className='form-control text-field' value={this.state.phoneno} onChange={this.formHandler}/>
                                    <p className="error">{this.state.phonenoErr}</p>
                                </div>
                                <div className='col-sm-6 mb-5 input-group'>
                                    <span className='input-group-text border-0' id='basic-addon1'><Icon icon='user' fill="#fff" />
                                    </span>
                                    <input type='password' placeholder='password'name="password"  className='form-control text-field' value={this.state.password} onChange={this.formHandler}/>
                                    <p className="error">{this.state.passwordErr}</p>
                                </div>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value='' required />
                                <label className='form-check-label'>
                                    Agree to <span className='funnelr'>terms & conditions</span>
                                </label>
                            </div>
                            <button type='submit' className='btn btn-submit mt-5'>Submit</button>
                         </form>   
                        </div>
                    </div>
                </div>
                    
            </div>
        )
    }
}


export default SignupForm;