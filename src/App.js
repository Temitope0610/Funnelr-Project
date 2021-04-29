import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './assets/css/App.css'
import Home from './Pages/home';
import Signup from './Pages/signUp';
import Subscription from './Pages/subscription';
import TypeForm from './Pages/typeForm'
import Dashboard from './Pages/dashboard'
import Salesfunnel from './Pages/salesFunnel';
import FunnelCreation from './Pages/funnelCreation'
import ChatbotCreation from './Pages/chatbotCreation'
import FormsPage from './Pages/formsPage';
import FormCreation from './Pages/formCreation';



 

 class App extends React.Component {
    render(){
      return(
        <div>
          <Router>
            <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/signup" ><Signup/></Route>
            <Route path="/subscription" ><Subscription /></Route>
            <Route path="/typeForm" ><TypeForm/></Route>
            <Route path="/dashboard" ><Dashboard/></Route>
            <Route path="/salesFunnel" ><Salesfunnel/></Route>
            <Route path="/funnelCreation" ><FunnelCreation/></Route>
            <Route path="/chatbotCreation" ><ChatbotCreation/></Route> 
            <Route path="/formsPage" ><FormsPage/></Route>
            <Route path="/formCreation" ><FormCreation/></Route>
            </Switch>
          </Router>
        </div>
      );
    }
  }
export default App;