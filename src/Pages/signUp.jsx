import React from 'react'
import Footer from './../Component/footer'
import Signupnav from '../Component/signupnav';
import SignupForm from '../Component/SignUpForm'



class Signup extends React.Component{
    render(){
        return(
            <div>
                <Signupnav />

                <SignupForm />

                <Footer />
            </div>  
        )
    }
}

export default Signup;