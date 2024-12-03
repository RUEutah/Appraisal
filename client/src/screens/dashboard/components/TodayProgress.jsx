import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { TodayProgressMessage, TodayProgressTitle } from '../../../Constant';
import { todayProgressData } from '../../../Data/OnlineCourse/ChartData';

const TodayProgress = () => {
  return (
    <Card className='get-card' style={{ marginLeft: '0', width: '100%' }}>
      <CardHeader className='card-no-border'>
        <H5>{TodayProgressTitle}</H5>
        <span className='f-14 f-w-500 f-light'>{TodayProgressMessage}</span>
      </CardHeader>
      <CardBody className='pt-0'>
        <div className='progress-chart-wrap' style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <ReactApexChart type='radialBar' width={340} height={300} options={todayProgressData.options} series={todayProgressData.series} />
        </div>
      </CardBody>
    </Card>
  );
};

export default TodayProgress;