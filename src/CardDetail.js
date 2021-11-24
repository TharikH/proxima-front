import React from 'react';
import { CardTitle, CardText, Card, CardSubtitle, CardBody, Button,Row,Col } from 'reactstrap';
import ModalPage2 from './ModalPage2';
class CardDetail extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:null,
            shopname:null,
            shopaddress:null,
            boolval:false
        }
    }
    modalOpen=()=>{
        this.setState((prevState) => {
            return { modal: !prevState.modal }
        });
    }
    render() {
        return (
            <div>
                <Card
                    outline
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            {this.state.name ? 'Welcome' +this.state.name: 'Please edit your profile :)'}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Shop Name : {this.state.shopname}
                    </CardSubtitle>
                        <CardText>
                            <Row>
                                <Col className="col-10 pt-2">
                                 Shop address : {this.state.shopaddress}
                                </Col>
                                <Col className="col-2 pr-5">
                                <Button color="primary" outline onClick={this.modalOpen}>
                                    Edit profile    
                                </Button>
                                </Col>
                            </Row>
                            </CardText>
                        
                    </CardBody>
                </Card>
                <ModalPage2 boolval={this.state.modal}/>
            </div>
        );
    }
}
// export default CardDetail;



export default CardDetail;