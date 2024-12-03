import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, Progressbar } from '../../../AbstractElements';
import { BasicProgressBars } from '../../../Constant';

const Basic = () => {
  return (
    <Card>
      <CardHeader>
        <H5>{BasicProgressBars}</H5>
      </CardHeader>
      <CardBody>
        <div className="progress-showcase row">
          <Col>
            <Progressbar attrProgress={{ color: 'success', value: '10',  className: 'sm-progress-bar'}} />
          </Col>
        </div>
      </CardBody>
    </Card>
  );
};

export default Basic;