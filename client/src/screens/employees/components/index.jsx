import {Col } from 'reactstrap';
import React, { Fragment, useState } from 'react';
import { Btn } from '../../../AbstractElements';
import { NewUsers } from '../../../Constant';
import FormModal from './FormModal';

const VaryingContent = () => {
  
  return (
    <Col >
           <div className="btn-showcase" >
           <Fragment>
            {//<Btn attrBtn={{ color: 'primary', onClick: toggle }}>Add  User</Btn>
            //<FormModal modal={modal} NewUsers={NewUsers} toggle={toggle} defaultVal="" />
            }
          </Fragment>
      
          </div> 
    </Col>

  );
};

export default VaryingContent;




