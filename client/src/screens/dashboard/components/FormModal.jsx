import React, {useEffect, useState} from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import CommonModal from './modal';
import axios from 'axios';

const FormModal = ({submit,  modal, NewAppraisal, toggle, defaultVal }) =>{
  const [appraisalForms, setAppraisalForms] = useState([]);

  useEffect(() => {
    getAppraisalForms();
  }, []);

  const getAppraisalForms = async () => {
    const response = await axios({
      url: "http://localhost:5000/getappraisalForms",
      method: "GET",
    });
    setAppraisalForms(response.data);
  }

    return(
      <CommonModal submit={submit} isOpen={modal} title={NewAppraisal } toggler={toggle} >
        <Form>
          <FormGroup>
            <Label className="col-form-label" for="recipient-name">{'Form Name:'}</Label>
            <Input type="select" name="select" className="form-control digits" defaultValue={defaultVal}>
            {appraisalForms.map((item) => (
              <option value={item.formId}>{item.formName}</option>
            ))} 
              </Input>
                                
            <Label className="col-form-label" for="recipient-name">{'Due Date:'}</Label>
            <Input className="form-control" type="date" defaultValue={defaultVal}/>
            
            <Label className="col-form-label" for="recipient-name">{'Appraisal Period:'}</Label>
            <Input className="form-control" type="text" defaultValue={defaultVal}/>

            <Label className="col-form-label" for="recipient-name">{'Date of Appraisal:'}</Label>
            <Input className="form-control" type="select" defaultValue={defaultVal}>
              <option>{'First Quarter'}</option>
              <option>{'Second Quarter'}</option>
              <option>{'Third Quarter'}</option>
            </Input>

            <Label className="col-form-label" for="recipient-name">{'Date of Next Appraisal:'}</Label>
            <Input className="form-control" type="select" defaultValue={defaultVal}>
              <option>{'First Quarter'}</option>
              <option>{'Second Quarter'}</option>
              <option>{'Third Quarter'}</option>
            </Input>
          </FormGroup>
        </Form>
      </CommonModal>     
    
    );
};

export default FormModal;