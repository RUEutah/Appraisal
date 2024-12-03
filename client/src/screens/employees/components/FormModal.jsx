import React, {useEffect, useState, useContext} from 'react';
import {Button, Modal, ModalFooter,ModalHeader, ModalBody, Form, FormGroup, Input, Label} from "reactstrap";
import axios from 'axios';
import CustomizerContext from './../../../_helper/Customizer';

  const FormModal = ({defaultVal, toggle, modal, user, roles, departments})=> {
    const [userId, setUserId] = useState(1);
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [roleId, setRole] = useState([]);
    const [departmentId, setDepartment] = useState([]);
    const { layoutURL } = useContext(CustomizerContext);

const createUser = async () => {
  console.log(`${userId} ${firstName} ${lastName} ${email} ${roleId} ${departmentId}`)

  axios({
    url: "http://localhost:5000/addusers",
    method: "POST",
    data: {userId, firstName, lastName, email, roleId, departmentId},
  }).then((res) => {
    const { newUser, message} = res.data;
       alert('Form submitted')
       toggle()
  })

  .catch((err) => {
      console.log(err);
    });
}

return (
  <div>
      
      <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add User Details</ModalHeader>
          <ModalBody>
              <Form onSubmit={createUser}>
                  <FormGroup>
                      <Label className="col-form-label" for="recipient-name">{'First Name:'}</Label>
                      <Input className="form-control" onChange={(e)=> {setFirstname(e.target.value)}} type="text" defaultValue={user.firstName}/>

                      <Label className="col-form-label" for="recipient-name">{'Last Name:'}</Label>
                      <Input className="form-control" onChange={(e)=> {setLastname(e.target.value)}} type="text" defaultValue={user.lastName}/>
                      
                      <Label className="col-form-label" for="recipient-name">{'email:'}</Label>
                      <Input className="form-control" onChange={(e)=> { setEmail(e.target.value)}} type="text" defaultValue={user.email} />

                      <Label className="col-form-label" for="recipient-name">{'Role:'}</Label>
                      <Input className="form-control"  type="select" onChange={(e)=> { setRole(e.target.value)}} value={user.roleId}> 
                        {roles.map((item) => (
                          <option value={item.roleId}>{item.roleName}</option>
                        ))} 
                      </Input>

                      <Label className="col-form-label" for="recipient-name">{'Department:'}</Label>
                      <Input className="form-control" type="select" onChange={(e)=> { setDepartment(e.target.value)}} value={user.departmentId}>
                        {departments.map((item) => (
                          <option value={item.departmentId}>{item.departmentName}</option>
                        ))} 
                      </Input> 
                  </FormGroup>
              </Form>
          </ModalBody>
          <ModalFooter>
              <Button color="primary" onClick={createUser}>Create</Button>
              <Button color="secondary" onClick={toggle}>Close</Button>
          </ModalFooter>
      </Modal>
  </div >
);

 
};

export default FormModal;