import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import {  Col, Container, Row } from 'reactstrap';
import GreetingGrid from './components/GreetingGrid';
import Calender from '../../Components/Common/CommonWidgets/Calender';
import TodayProgress from './components/TodayProgress';
import AllCampaigns from './components/Table';

const DashboardPage = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Appraisal Dashboard' parent='Pages' title='Appraisal Dashboard' />
      <Container fluid={true}>
        <Row>
        <Col  xl='6' className='col-ed-4 box-col-4'>
          <GreetingGrid/>
          </Col>
          <Col  xl='6' className='col-ed-4 box-col-4'>
          <Calender/>
          </Col>
          <Col  xl='12' className='col-ed-4 box-col-4'>
          <AllCampaigns/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DashboardPage;
