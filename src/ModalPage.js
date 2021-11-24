import React from 'react';
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
import FormDetails from './FormDetails';
class ModalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,

        }
    }
    toggle = () => {
        this.setState((prevState) => {
            return { modal: !prevState.modal }
        });
    }
    render() {
        return (
            <div style={{
                display: 'block'
            }}>
                <Button color="primary"
                    onClick={this.toggle}>Add New Product</Button>
                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}
                    centered
                    >
                        <ModalHeader toggle={this.toggle}>
                        Add new Product
                        </ModalHeader>
                    <ModalBody>
                        <FormDetails />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={this.toggle}
                        >
                            Submit
      </Button>
                        {' '}
                        <Button onClick={this.toggle}>
                            Cancel
      </Button>
                    </ModalFooter>
                </Modal>
            </div >
        );
    }
}

export default ModalPage;