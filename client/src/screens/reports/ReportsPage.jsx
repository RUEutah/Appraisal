import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import {  Col, Container, Row } from 'reactstrap';

import ChartWidgets from './components/ChartWidgets';
import GeneralComponent from './components';


const ChartsPage = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Overview' parent='Pages' title='Charts' />
      <Container fluid={true}>
        <Row>
        <Col  xl='12' className='col-ed-4 box-col-4'>
         <GeneralComponent/>
          </Col>
        </Row>
        <Row>
        <Col  xl='12' className='col-ed-4 box-col-4'>
         <ChartWidgets/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ChartsPage;
