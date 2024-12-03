import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Breadcrumbs, P } from '../../../AbstractElements';
import {GreetingGrid} from '../../Dashboard/GreetingGrid'

const Sample = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Sample Page" parent="Pages" title="Sample Page" />
      <Container fluid={true}>
        <Row>
        <GreetingGrid />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Sample;