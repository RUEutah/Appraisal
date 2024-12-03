import React, { Fragment, useState } from 'react';
import { Btn } from '../../../AbstractElements';
import { NewAppraisal } from '../../../Constant';
import FormModal from './FormModal';

const ModalButton = ({ btnText, defaultVal }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
      <Btn attrBtn={{ color: 'primary', onClick: toggle }}>{btnText}</Btn>
      <FormModal modal={modal} NewAppraisal={NewAppraisal} toggle={toggle} defaultVal={defaultVal} />
    </Fragment>
  );
};

export default ModalButton;