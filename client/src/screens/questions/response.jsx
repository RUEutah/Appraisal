import React, { Fragment, useEffect, useState } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import Basic from './components/index';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, CardBody, Form, Button, Label, Input , Container } from 'reactstrap';
import HeaderCard from '../../Components/Common/Component/HeaderCard';
import FooterCard from '../../Components/Forms/FormControl/Common/FooterCard';

const Responses = () => {

  const query = new URLSearchParams(useLocation().search); // Access query parameters

  //sessiondata
  const [sessionData, setSessionData] = useState({});
  //questions
  const [form, setForm] = useState(false);
  const [questions, setQuestions] = useState({});
  const [formId, setFormId] = useState();
  const [respondetId, setRespondentId] = useState();
  const [answer, setAnswer] = useState();
  const [questionId, setQuestionId] = useState();
  const [answerId, setAnswerId] = useState();
  const [userId, setUSerId] = useState();
  const [tabledata, setTableData] = useState([])

  //functio get session
  const getAppraisalSession = async ( ) => {
    try {
      const id = query.get('id'); 
      const response = await axios.get(`http://localhost:5000/getappraisalSession/${id}`);
      setSessionData(response.data.data.session);
      setQuestions(response.data.data.questions);
      console.log(response.data.data.questions);
      console.error("fetched appraisal answers", response);
    } catch (error) {
      console.error("Error fetching appraisal answers", error);
    }
  };
 
  useEffect(()=> { 
    getAppraisalSession();  
  }, [])

  const toggle = () => setForm(!form);

  let tabled = [];
  let tablea = [];


return (
  <Fragment>
    <Breadcrumbs mainTitle='Inputs Page' parent='Pages' title='Inputs Page' />
    <Container fluid={true}>
      <Row>
        <Col xl='12' className='col-ed-4 box-col-4'> 
          <Basic />
        </Col>
      </Row>
      <Row>
        <Col xl='12' className='col-ed-4 box-col-4'>
          <Fragment>
            <Card>
              <HeaderCard title="Questions" />
              <Form className="form theme-form">
                <CardBody>
                  {
                    Object.keys(questions).length < 1 ? null : questions.questions.map((q) => {
                      return (
                        <Row key={q.questionId}>
                          <Col>
                            {q.mainPart && (
                              <>
                                <Label style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                  Part {q.mainPart}: <span style={{ fontStyle: 'italic' }}>{q.mainTopic}</span>
                                </Label>
                                <br />
                              </>
                            )}
                            {q.subPart && (
                              <>
                                <Label style={{ fontSize: '18px', fontWeight: 'bold', paddingTop: '40px' }}>
                                  Part {q.subPart}: {q.subTopic}
                                </Label>
                                <br />
                              </>
                            )}
                            {!q.table || q?.table?.length < 1 ? (
                              <>
                                <Label htmlFor="exampleFormControlTextarea9" style={{ fontSize: '16px' }}>
                                  {q.questionNo}. {q.question}
                                </Label>
                                <Input
                                  id={q.questionId}
                                  onBlur={(e) => createAnswers(e.target.value)}
                                  type="textarea"
                                  className="form-control btn-pill"
                                  style={{ border: "1px solid black" }}
                                  rows="1"
                                />
                              </>
                            ) : (
                              <>
                                <Label htmlFor="exampleFormControlTextarea9" style={{ fontSize: '16px' }}>
                                  {q.question}
                                </Label>
                                <table className='table table-striped' style={{ borderCollapse: "collapse", width: "100%" }}>
                                  <thead>
                                    <tr>
                                      {
                                        Object.keys(q.table[0]).map((t) => {
                                          if (t === 'Supervisor Rating' && roleId == 1) return null;
                                          return <th key={t}>{t}</th>;
                                        })
                                      }
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                      q.table.map((row, rowIndex) => (
                                        <tr key={rowIndex} style={{ borderBottom: "1px solid black" }}>
                                          {
                                            Object.keys(row).map((c, colIndex) => {
                                              if (c === 'Supervisor Rating' && roleId == 1) return null;
                                              return (
                                                <td key={colIndex} style={{ border: "1px solid black", padding: "8px" }}>
                                                  {row[c].length < 1 ? (
                                                    <Input type="textarea" name={`q${q.questionId}_${rowIndex}_${colIndex}`} style={{ border: "1px solid black" }} className="form-control btn-pill" rows="1" />
                                                  ) : (
                                                    row[c]
                                                  )}
                                                </td>
                                              );
                                            })
                                          }
                                        </tr>
                                      ))
                                    }
                                  </tbody>
                                </table>
                              </>
                            )}
                          </Col>
                        </Row>
                      );
                    })
                  }
                </CardBody>
              </Form>
            </Card>
          </Fragment>
        </Col>
      </Row>
    </Container>
  </Fragment>
);
};

export default Responses;
