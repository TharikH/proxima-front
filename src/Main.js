import React from 'react';
import Navs from './Navs';
import Login from './Login';
import Signup from './Signup'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
class Main extends React.Component{
    render(){
        return(
            <div> 
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/Signup">
                        <Signup />
                    </Route>



                </Switch>
               
            </Router>   
            </div>
        );
    }
}

export default Main;