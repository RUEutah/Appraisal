import React, {useState, useContext, useEffect } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { AddAppraisal, Close } from '../../../Constant';
import axios from "axios";
import CustomizerContext from '../../../_helper/Customizer';



const CommonModal = (props) => {
  const [appraisalSessions, setAppraisalSessions] = useState('');
  const [formName, setFormName] = useState('');
  const { layoutURL } = useContext(CustomizerContext);

  useEffect(() => {

  }, [])

  
  const addAppraisal = async()=>{
  
      const response = await axios({
        url: "http://localhost:5000/addappraisalSessions",
        method: "POST",
        data: {formName},
      }).then((res) => {
        const { appraisalSessions, message} = res.data;
           alert(message)
           localStorage.setItem('Form Name', `${appraisalSessions[0].formName} ${appraisalSessions[0].dueDate}`);
  
           window.location.href = `${process.env.PUBLIC_URL}/pages/sample-page/${layoutURL}`;
  
      })
      .catch((err) => {
          console.log(err);
        });
        setAppraisalSessions(response.data)
    

  }

  return (
    <Modal isOpen={props.isOpen} toggle={props.toggler} size={props.size} centered>
      <ModalHeader toggle={props.toggler}>
        {props.title}
      </ModalHeader>
      <ModalBody className={props.bodyClass}>
        {props.children}
      </ModalBody>
      <ModalFooter>
        <Btn attrBtn={{ color: 'secondary', onClick: props.toggler }} >{Close}</Btn>
        <Btn attrBtn={{ color: 'primary', className: 'd-block w-10 mt-2', onClick: () => props.submit() }}>{AddAppraisal}</Btn>

      </ModalFooter>
    </Modal>
  );
};

export default CommonModal;