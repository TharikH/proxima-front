import React from "react";
import {Table,Button, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class Tables extends React.Component{
  render(){
    return(
    <Table hover>
  <thead>
    <tr>
      <th>
        Product
      </th>
      <th>
        Name
      </th>
      <th>
        Availability
      </th>
      <th>
        Price
      </th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Mark
      </td>
      <td>
        Otto
      </td>
      <td>
        @mdo
      </td>
      <td>
        <Row className="tableicon">
          <Col className="col-1">
          <FontAwesomeIcon icon={faEdit} />
          </Col>
          <Col className="col-1">
          <FontAwesomeIcon icon={faTrashAlt}/>
          </Col>
        </Row>
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        @fat
      </td>
      <td>
        <Row className="tableicon">
          <Col className="col-1">
          <FontAwesomeIcon icon={faEdit} />
          </Col>
          <Col className="col-1">
          <FontAwesomeIcon icon={faTrashAlt}/>
          </Col>
        </Row>
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        @twitter
      </td>
      <td>
        <Row className="tableicon">
          <Col className="col-1">
          <FontAwesomeIcon icon={faEdit} />
          </Col>
          <Col className="col-1">
          <FontAwesomeIcon icon={faTrashAlt}/>
          </Col>
        </Row>
      </td>
    </tr>
  </tbody>
</Table>
    );
  }
}

export default Tables;