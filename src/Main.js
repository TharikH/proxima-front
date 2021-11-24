import React from 'react';
import Navs from './Navs';
import Tables from './Tables';
import './App.css';
import {Container,Button,Row} from 'reactstrap';
import CardDetail from './CardDetail';
import ModalPage from './ModalPage';
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
                    <Route>
                    <div>
                    <Navs />
                <Container className="mt-4">
                    <CardDetail/>
                    <Row className="pt-4 addbutton"><ModalPage /></Row>
                <Tables />
                </Container>
                    </div>
                    </Route>
                </Switch>
            </Router>   
            </div>
        );
    }
}

export default Main;