import React from 'react';
import { UserMinus, UserPlus } from 'react-feather';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { UL, LI, H5 } from '../../../AbstractElements';
import { TotalUsers, WeeklyMonDropdown } from '../../../Constant';
import DropdownCommon from '../../Common/Dropdown';
const TotalUser = () => {
  return (
    <Card>
      <CardHeader className='card-no-border pb-0'>
        <div className='header-top'>
          <H5>{TotalUsers}</H5>
          <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={WeeklyMonDropdown} iconName='icon-more-alt' btn={{ tag: 'span' }} />
        </div>
      </CardHeader>
      <CardBody className='py-lg-3'>
        <UL attrUL={{ className: 'user-list' }}>
          <LI>
            <div className='user-icon primary'>
              <div className='user-box'>
                <UserPlus className='font-primary' />
              </div>
            </div>
            <div>
              <H5 attrH5={{ className: 'mb-1' }}>178</H5>
             
            </div>
          </LI>
          <LI>
            <div className='user-icon success'>
              <div className='user-box'>
                <UserMinus className='font-success' />
              </div>
            </div>
            <div>
              <H5 attrH5={{ className: 'mb-1' }}>8</H5>
              
            </div>
          </LI>
        </UL>
      </CardBody>
    </Card>
  );
};

export default TotalUser;
