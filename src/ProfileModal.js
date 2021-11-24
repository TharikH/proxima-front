import React from 'react';
import { Badge, Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap';
import { geolocated } from "react-geolocated";

class FormDetails extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            lattiude:null,
            longitude:null,
            useraddress:null
        }
    }
    componentDidMount() {
    
      }
    

    getLocation=()=>{
        navigator.geolocation.getCurrentPosition((position) =>{
            if(position.coords.latitude){
        this.setState({lattiude:position.coords.latitude,longitude:position.coords.longitude});
            }
        });
    }
    render() {
        return (
            <Form inline>
                <FormGroup>
                    <Label
                        for="exampleEmail"
                        hidden
                    >
                        Name
                </Label>
                    <Input
                        id="productname"
                        name="name"
                        placeholder="Name"
                        type="text"
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label
                        for="exampleEmail"
                        hidden
                    >
                        Shop Name
                </Label>
                    <Input
                        id="productname"
                        name="name"
                        placeholder="ShopName"
                        type="text"
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label
                        for="examplePassword"
                        hidden
                    >
                        Email
                    </Label>
                    <Input
                        id="productprice"
                        name="price"
                        placeholder="Email"
                        type="email"
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="exampleFile" className="mr-2">
                        Update your location
                    </Label>
                    <br />
                    <Button outline color="primary" onClick={this.getLocation}>Get Location</Button>
                </FormGroup>
                <FormGroup>
                    {this.state.lattiude?<Label >
                        <Badge
                        color="primary"
                        pill
                        > lattitude: {this.state.lattiude}</Badge>
                        
                        <Badge
                        color="primary"
                        pill
                        >longitude:{this.state.longitude}
                        </Badge> <br/>
                    </Label> :null}
                </FormGroup>
                <Button>
                    Submit
                </Button>
            </Form>
        );
    }
}
export default FormDetails;