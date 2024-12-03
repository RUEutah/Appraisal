import React, {useEffect, useState, useContext} from 'react';
import {Button, Modal, ModalFooter,ModalHeader, ModalBody, Form, FormGroup, Input, Label} from "reactstrap";
import axios from 'axios';
import CustomizerContext from './../../../_helper/Customizer';


const App = ({defaultVal})=> {

    const [modal, setModal] = useState(false);
    const [appraisalForms, setAppraisalForms] = useState([]);
    const [formId, setFormId] = useState(1);
    const [dueDate, setDueDate] = useState();
    const [appraisalPeriod, setAppraisalPeriod] = useState();
    const [dateOfAppraisal, setDateOfAppraisal] = useState();
    const [dateOfNextAppraisal, setDateOfNextAppraisal] = useState();
    const [roleId, setRoleId] = useState(localStorage.getItem("roleId"));
    const { layoutURL } = useContext(CustomizerContext);


    useEffect(() => {
        getAppraisalForms();
    }, []);

    const toggle = () => setModal(!modal);
    
    const getAppraisalForms = async () => {
        const response = await axios({
            url: "http://localhost:5000/getappraisalForms",
            method: "GET",
        });
        setAppraisalForms(response.data); 
    }

    const createSession = async () => {
        console.log(`${formId} ${dueDate} ${appraisalPeriod} ${dateOfNextAppraisal} ${dateOfAppraisal}`)

        axios({
          url: "http://localhost:5000/addappraisalSessions",
          method: "POST",
          data: {formId, dueDate, appraisalPeriod, dateOfAppraisal, dateOfNextAppraisal},
        }).then((res) => {
          const { appraisalSession, message} = res.data;
             alert('Form submitted')
             toggle()
             //localStorage.setItem('Name', `${appraisalSession[0].formId} ${appraisalSession[0].dueDate} ${appraisalSession[0].appraisalPeriod}}`);
        })

        .catch((err) => {
            console.log(err);
          });


    }

    return (
        <div style={{
            display: 'block', padding: 100
        }}>
        {
             roleId === "2" ?  <Button color="primary" onClick={toggle}>Create Appraisal</Button> : <></>
        }

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add Appraisal Details</ModalHeader>
                <ModalBody>
                    <Form onSubmit={createSession}>
                        <FormGroup>
                            <Label className="col-form-label" for="recipient-name">{'Form Name:'}</Label>
                            <Input type="select" value={formId} onChange={(e)=> { setFormId(e.target.value)}} name="formId" className="form-control digits" >
                                {appraisalForms.map((item) => (
                                <option value={item.formId}>{item.formName}</option>
                                ))} 
                            </Input>
                                                
                            <Label className="col-form-label" for="recipient-name">{'Due Date:'}</Label>
                            <Input className="form-control"  value={dueDate} onChange={(e)=> { setDueDate(e.target.value)}} name="dueDate" type="date" />
                            
                            <Label className="col-form-label" for="recipient-name">{'Appraisal Period:'}</Label>
                            <Input className="form-control"  value={appraisalPeriod} onChange={(e)=> { setAppraisalPeriod(e.target.value)}} name="appraisalPeriod" type="text" />

                            <Label className="col-form-label" for="recipient-name">{'Date of Appraisal:'}</Label>
                            <Input className="form-control"  value={dateOfAppraisal} onChange={(e)=> { setDateOfAppraisal(e.target.value)}} name="dateOfAppraisal" type="select" >
                                <option>{'First Quarter'}</option>
                                <option>{'Second Quarter'}</option>
                                <option>{'Third Quarter'}</option>
                            </Input>

                            <Label className="col-form-label" for="recipient-name">{'Date of Next Appraisal:'}</Label>
                            <Input className="form-control" value={dateOfNextAppraisal} onChange={(e)=> { setDateOfNextAppraisal(e.target.value)}}  name="dateOfNextAppraisal" type="select" >
                                <option>{'First Quarter'}</option>
                                <option>{'Second Quarter'}</option>
                                <option>{'Third Quarter'}</option>
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={createSession}>Create</Button>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div >
    );
}

export default App;
