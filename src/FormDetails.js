import React from 'react';
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap';

class FormDetails extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data:props.data
        }
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
                        value={this.state.data?this.state.data.name:''}
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label
                        for="examplePassword"
                        hidden
                    >
                        Name
                    </Label>
                    <Input
                        id="productprice"
                        name="price"
                        placeholder="Price"
                        type="Number"
                        value={this.state.data?this.state.data.price:''}
                    />
                </FormGroup>
                {' '}
                <FormGroup check>
                    <Input
                        name="radio1"
                        type="radio"
                        // {this.state.data?this.state.data.Name:''}
                        // {}
                    />
                    {' '}
                    <Label check>
                        Available
                </Label>
                </FormGroup>
                <FormGroup check>
                    <Input
                        name="radio1"
                        type="radio"
                    />
                    {' '}
                    <Label check>
                        Not Available
                </Label>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">
                        Upload image
                    </Label>
                    <Input
                        id="exampleFile"
                        name="file"
                        type="file"
                    />
                    <FormText>
                        Add images of the product in png,jpeg or jpg format for display.
                    </FormText>
                </FormGroup>
                <Button>
                    Submit
                </Button>
            </Form>
        );
    }
}
export default FormDetails;