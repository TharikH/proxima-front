import React from 'react';
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
import FormDetails from './FormDetails';
import ProfileModal from './ProfileModal';
class ModalPage2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: props.boolval,

        }
    }
    componentDidMount(props){

    }
    // static getDerivedStateFromProps(props, state) {
    //     if(props.boolval !== state.modal){
    //         console.log(props.boolval)
    //     return {modal: props.boolval };
    //     }
    //     return null
    // }
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
                        Edit your Profile
                        </ModalHeader>
                    <ModalBody>
                        <ProfileModal />
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

export default ModalPage2;