import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import TransactionList from './components/ExampleCard';

const Transaction = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Transaction Page</h3>
      </Col>
    </Row>
    <Row>
      <TransactionList />
    </Row>
  </Container>
);

export default Transaction;
