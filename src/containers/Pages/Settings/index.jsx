import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import TabContainer from './components/Container';

const SettingsPage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        {/* <h3 className="page-title">Settings Page</h3> */}
      </Col>
    </Row>
    <Row>
      <TabContainer />
    </Row>
  </Container>
);

export default SettingsPage;
