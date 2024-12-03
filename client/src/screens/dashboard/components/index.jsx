import React from 'react';
import {Col } from 'reactstrap';
import ModalButton from './ModalButton';

const VaryingContent = () => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const submit = () => {
    alert('Form submitted');
  }

  return (
    <Col sm="12" className="d-flex justify-content-center align-items-center" style={{ height: '30vh', marginLeft: '-200px'}}>
      
          <div className="btn-showcase" >
          <Fragment>
            <Btn attrBtn={{ color: 'primary', onClick: toggle }}>Create Su</Btn>
            <FormModal submit={submit} modal={modal} NewAppraisal={NewAppraisal} toggle={toggle} defaultVal={defaultVal} />
          </Fragment>
          </div>
        
    </Col>

  );
};

export default VaryingContent;