import React from 'react';
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
import FormDetails from './FormDetails';
class ModalPage3 extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            modal: false,
            id:props.id,
            data:props.data
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.boolval !== this.props.boolval) {
          this.setState({ modal: nextProps.boolval });
          console.log(nextProps);
        //   this.selectNew();
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
                {/* <Button color="primary"
                    onClick={this.toggle}>Open Modal</Button> */}
                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}
                    centered
                    >
                        <ModalHeader toggle={this.toggle}>
                        Add new Product
                        </ModalHeader>
                    <ModalBody>
                        <FormDetails data={this.state.data}/>
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

export default ModalPage3;