import React from 'react';
import { Col, Row } from 'reactstrap';
import GreetingCard from './GreetingCard';

const GreetingGrid = () => {
  return (
    <Col xl='12' className='col-ed-4 box-col-4'>
      <Row>
        <Col sm='12'>
          <GreetingCard />
        </Col>
      </Row>
    </Col>
  );
};

export default GreetingGrid;
