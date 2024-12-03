import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { RadialBarChart } from "../../../Constant";
import HeaderCard from "../../../Components/Common/Component/HeaderCard";
import Chart from 'react-apexcharts';
import { apexRadialBarChart } from "../../../Components/Charts/ApexCharts/apexData";

const RadialBarChartClass = () => {
    return (
        <Fragment>
            <Col sm='12' xl="12">
                <Card>
                    <HeaderCard title={RadialBarChart} />
                    <CardBody>
                        <div id='circlechart'>
                            <Chart options={apexRadialBarChart.options} series={apexRadialBarChart.series} type="radialBar" height={320} />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default RadialBarChartClass;