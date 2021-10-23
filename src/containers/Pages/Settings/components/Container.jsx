import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import TabBorderedBottom from '../tabs/TabBorderedBottom'

const ExampleCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>       
        <TabBorderedBottom/>
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
