import { Container, Row, Col, TabContent, TabPane } from 'reactstrap';
import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import axios from "axios";
import { Btn, H4, P } from '../../AbstractElements';
import { EmailAddress, ForgotPassword, LoginWithJWT, Password, RememberPassword, SignIn } from '../../Constant';
import { useNavigate } from 'react-router-dom';
import man from '../../assets/images/dashboard/profile.png';
import CustomizerContext from '../../_helper/Customizer';


const Logins = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(false);
  const { layoutURL } = useContext(CustomizerContext);

  const navigate = useNavigate();


  const signIn = () => {
    console.log(`loging in using ${email} ${password}`)

    axios({
      url: "http://localhost:5000/login",
      method: "POST",
      data: {email, password},
    }).then((res) => {
      const { token , user, message} = res.data;

      if(token){
        localStorage.setItem('token', token);
        localStorage.setItem('profileURL', man);
        localStorage.setItem('roleId', user[0].roleId);
        localStorage.setItem('Name', `${user[0].firstName} ${user[0].lastName}`);

        navigate('/dubai')
      }

    })
    .catch((err) => {
        console.log(err);
        alert("Wrong email and password");
      });
  }

  return (
    <Container fluid={true} className='p-0 login-page'>
      <Row>
        <Col xs='12'>
          <div className='login-card'>
            <div className='login-main login-tab'> 
              <Fragment>
                <Form className='theme-form'>
                  <H4> Sign In </H4>
                  <P>{'Enter your email & password to login'}</P>
                  <FormGroup>
                    <Label className='col-form-label'>{EmailAddress}</Label>
                    <Input className='form-control' type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                  </FormGroup>
                  <FormGroup className='position-relative'>
                    <Label className='col-form-label'>{Password}</Label>
                    <div className='position-relative'>
                      <Input className='form-control' type={togglePassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} value={password} />
                      <div className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                        <span className={togglePassword ? '' : 'show'}></span>
                      </div>
                    </div>
                  </FormGroup>
                  <div className='position-relative form-group mb-0'>
                    <div className='checkbox'>
                      <Input id='checkbox1' type='checkbox' />
                      <Label className='text-muted' for='checkbox1'>
                        {RememberPassword}
                      </Label>
                    </div>
                    <a className='link' href='#javascript'>
                      {ForgotPassword}
                    </a>
                  
                    <Btn attrBtn={{ color: 'primary', className: 'd-block w-100 mt-2', onClick: () => signIn() }}>{LoginWithJWT}</Btn>
                  
                  </div>
              
                </Form>
              </Fragment>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Logins;
