import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink,Row, TabContent, TabPane } from 'reactstrap';
import { AppraisalDetails, Hometxt, Profile, } from '../../../Constant';
import { H5, P } from '../../../AbstractElements';
import PieChartClass from './PieChart';
import RadialBarChartClass from './RadialBarChart';
import DataTableComponent from './DataTableComponent';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const PillWarningTab = () => {
  const [sessionData, setSessionData] = useState({});
  const [respondents, setRespondents] = useState([]);
  const [warningTab, setwarningTab] = useState('1');

  const query = new URLSearchParams(useLocation().search); 
  const id = query.get('id'); 


  return (
    <Col sm='12' xl='12' className='xl-100'>
      <Card className='height-equal'>
        <CardHeader>
          <H5>{AppraisalDetails}</H5>
        </CardHeader>
        <CardBody>
          <Nav className='nav-warning nav-pills'>
            <NavItem>
              <NavLink href='#javascript' className={warningTab === '1' ? 'active' : ''} onClick={() => setwarningTab('2')}>
                <i className='icofont icofont-man-in-glasses'></i>
                {Profile}
              </NavLink>
            </NavItem>
           
          </Nav>
          <TabContent activeTab={warningTab}>
            <TabPane tabId='1'>
              <P attrPara={{ className: 'mb-0 m-t-30' }}>
                {
                  <Col  xl='12' className='col-ed-6 box-col-6'>
                    {
                      <DataTableComponent id={id} respondents={respondents}/>
                    }
                  </Col>
                }
              </P>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillWarningTab;

/*
 <NavItem>
              <NavLink href='#javascript' className={warningTab === '1' ? 'active' : ''} onClick={() => setwarningTab('1')}>
                <i className='icofont icofont-ui-home'></i>
                {Hometxt}
              </NavLink>
            </NavItem> 

<TabPane className='fade show' tabId='1'>
              <P attrPara={{ className: 'mb-0 m-t-30' }}>
                {
                  <Col sm='12' xl='12' className='xl-100'>
                  <Row>
                    <Col  xl='6' className='col-ed-6 box-col-6'>
                   <PieChartClass/>
                   </Col>
                   <Col  xl='6' className='col-ed-6 box-col-6'>
                   <RadialBarChartClass/>
                   </Col>
                  </Row>
                  </Col>
                }
              </P>
            </TabPane>
*/
 