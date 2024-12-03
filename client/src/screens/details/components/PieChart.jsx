import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { PieChart } from "../../../Constant";
import HeaderCard from "../../../Components/Common/Component/HeaderCard";
import Chart from 'react-apexcharts';
import { apexPieChart } from "../../../Components/Charts/ApexCharts/apexData";

const PieChartClass = () => {
    return (
        <Fragment>
            <Col sm='12' xl='12'>
                <Card>
                    <HeaderCard title={PieChart} />
                    <CardBody className="apex-chart">
                        <div id='piechart'>
                            <Chart options={apexPieChart.options} series={apexPieChart.series} type="pie" width={500} height={300} />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default PieChartClass;