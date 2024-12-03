import React, { Fragment } from 'react';
import { Breadcrumbs} from '../../AbstractElements';
import { Col, Container, Row } from 'reactstrap';
import AppTabs from './components/AppraisalTabs';

const AppPage = () => {
    return (
        <Fragment>
          <Breadcrumbs mainTitle='Appraisal Details' parent='Pages' title='Appraisal Details ' />
          <Container fluid={true}>
            <Row>
              <Col  xl='12' className='col-ed-4 box-col-4'>
              <AppTabs/>
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
  
};

export default AppPage;
