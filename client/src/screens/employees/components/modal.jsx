import React, {useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { AddUser, Close } from '../../../Constant';
import axios from "axios";


const CommonModal = (props) => {
  
  //const [data, setData] = useState([]);

 /* useState(() => {
    addUsers();
  }, []);
  const addUsers = async () => {
    const users = await axios({
        url: "http://localhost:5000/addusers",
        method: "POST",
      });

     setData(users.data)
}*/
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
        <Btn attrBtn={{ color: 'primary', onClick: props.toggler }}>{AddUser}</Btn>
      </ModalFooter>
    </Modal>
  );
};

export default CommonModal;