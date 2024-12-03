import React from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { AllCampaignsTitle, DailyDropdown } from '../../../Constant';
import { AllCampaignsTable } from '../../../Data/Social';
import DropdownCommon from '../../../Components/Common/Dropdown';

const AllCampaigns = () => {
  const handleViewClick = (item) => {
    // Add your logic to handle the "View" button click
    console.log('Viewing item:', item);
  };

  const handleAnswerClick = (item) => {
    // Add your logic to handle the "Answer" button click
    console.log('Answering item:', item);
  };

  return (
    <Card>
      <CardHeader className='card-no-border'>
        <div className='header-top'>
          <H5 className='m-0'>{AllCampaignsTitle}</H5>
          <div className='card-header-right-icon'>
            <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} iconName='icon-more-alt' btn={{ tag: 'span' }} />
          </div>
        </div>
      </CardHeader>
      <CardBody className='pt-0 campaign-table'>
        <div className='recent-table table-responsive currency-table'>
          <Table>
            <thead>
              <tr>
                {AllCampaignsTable.header.map((item, i) => (
                  <th key={i} className='f-light'>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {AllCampaignsTable.body.map((item, i) => (
                <tr key={i}>
                  <td>
                    {item.campaign}
                    <td><span className='f-light'>{item.subTitle}</span></td>
                  </td>
                  <td>{item.period}</td>
                  <td>{item.date}</td>
                  <td>
                    <button className={`btn btn-primary btn-sm me-2`} onClick={() => handleViewClick(item)}>
                      View
                    </button>
                    <button className={`btn btn-success btn-sm`} onClick={() => handleAnswerClick(item)}>
                      Answer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default AllCampaigns;