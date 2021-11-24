import React from 'react';
import Navs from './Navs';
import Tables from './Tables';
import './App.css';
import {Container,Button,Row} from 'reactstrap';
import CardDetail from './CardDetail';
import ModalPage from './ModalPage';
class Main extends React.Component{
    render(){
        return(
            <div>
                <Navs />
                <Container className="mt-4">
                    <CardDetail/>
                    <Row className="pt-4 addbutton"><ModalPage /></Row>
                <Tables />
                </Container>
                
            </div>
        );
    }
}

export default Main;