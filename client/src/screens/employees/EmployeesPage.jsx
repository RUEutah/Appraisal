import React, { Fragment , useState, useEffect} from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import {  Col, Container, Row, Button , Input} from 'reactstrap';
import DataTableComponent from './components/DataTableComponent';
import FormModal from './components/FormModal';
import axios from 'axios';

const EmployeesPage = () => {

  const [modal, setModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [departments, setDepartments] = useState([]);
  
  const [data, setData] = useState([]);


  
  const toggle = () => setModal(!modal);

  useEffect(()=> {
    getUsers();
    getRoles();
    getDepartments();

}, [])

const getUsers = async () => {
    const users = await axios({
        url: "http://localhost:5000/getusers",
        method: "GET",
      });

     setUsers(users.data.data)
}

const getRoles = async () => {
  const roles = await axios({
      url: "http://localhost:5000/getroles",
      method: "GET",
    });

   setRoles(roles.data)
}

const getDepartments = async () => {
  const departments = await axios({
      url: "http://localhost:5000/getdepartments",
      method: "GET",
    });

   setDepartments(departments.data)
}

  return (
    <Fragment>
      <Breadcrumbs mainTitle='Employees' parent='Pages' title='Employees Page' />
      <Container fluid={true}>
      < FormModal toggle={toggle} modal={modal} user={user} roles={roles} departments={departments}/>
      <Row style={{ width: '95%' }}>
        <Col xl='4' className='d-flex align-items-center' marginRight='100px'>
        <Input 
            className='form-control' 
            type='search' 
            placeholder='Search...'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)} 
        />
        </Col>
        <Col xl='8 ' className='d-flex justify-content-end align-items-center'>
            <Button 
                color="primary" 
                onClick={() => {
                    setUser({});
                    toggle();
                }}
            >
                Add User
            </Button>
        </Col>
</Row>
        <Row>
          <Col  xl='12' className='col-ed-4 box-col-4' style={{ paddingTop: 20}}>

          <DataTableComponent toggle={toggle} setUser={setUser} users={users} setUsers={setUsers}/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default EmployeesPage;
