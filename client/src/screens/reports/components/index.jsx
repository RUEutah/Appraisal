import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import {  WidgetsData1WidgetsPage } from '../../../Data/DefaultDashboard';
import Widgets1 from './Widgets1';

const GeneralComponent = () => {
  return (
    <Fragment>
      <Container fluid={true} className='general-widget'>
        <Row>
          
          {WidgetsData1WidgetsPage.map((item, i) => (
            <Col key={i} sm='6' xl='3' lg='6' className='box-col-6'>
              <Widgets1 data={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default GeneralComponent;
