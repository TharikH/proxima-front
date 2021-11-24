import React from 'react';
import { CardTitle, CardText, Card, CardSubtitle, CardBody, Button } from 'reactstrap';
class CardDetail extends React.Component {
    render() {
        return (
            <div>
                <Card
                    outline
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            Hello Name
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                    y</CardSubtitle>
                        <CardText>
                            Welcome to Proxima , for improving your sales by providing a way for customers to find your restaurant. 
      </CardText>
                        {/* <Button>
                            Button
      </Button> */}
                    </CardBody>
                </Card>
            </div>
        );
    }
}
// export default CardDetail;



export default CardDetail;