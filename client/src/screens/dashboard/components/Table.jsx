import React, {useEffect, useState }  from 'react';
import { Card, CardBody, CardHeader, Table,} from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { AllCampaignsTitle, DailyDropdown } from '../../../Constant';
import { useNavigate } from 'react-router-dom';
import DropdownCommon from '../../../Components/Common/Dropdown';
import axios from "axios";

const AllCampaigns = () => {
  const navigate = useNavigate();
  const [roleId, setRoleId] = useState(localStorage.getItem("roleId"));
  const [appraisalSessions, setAppraisalSessions] = useState([]);

  useEffect(() => {
    getAppraisalSessions();
  }, []);

  const getAppraisalSessions = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getappraisalSessions");
      console.log(response.data)
      //response.data.data = response?.data?.data?.reverse();
      response.data.data.length = 5;
      setAppraisalSessions(response.data.data);
      console.log("Appraisals", response.data.data);
    } catch (error) {
      console.error("Error fetching appraisal sessions", error);
    }
  };

  const handleViewClick = (item) => {
    // Add your logic to handle the "View" button click 
    console.log('Viewing item:', item);
    navigate(`/pages/app-page/:layout?id=${item.sessionId}`); 

  };


  const handleAnswerClick = (item) => {
    // Add your logic to handle the "Answer" button click
    console.log('Answering item:', item);
    navigate(`/pages/qna/:layout?id=${item.sessionId}`); 

  };
  
  const mapToTableBody = (data) => {
    return data.map((session) => ({
      sessionId: session.sessionId,
      period: session.appraisalPeriod,
      campaign: session.formName,  // form id determines the name of appraisal
      subTitle: new Date(session.createdAt).toLocaleString(),
      status: 'Active',  // check if date has not surpassed to determine status
      date: new Date(session.dueDate).toLocaleDateString('en-US', { month: 'short' }),
    }));
  };
  const tableBodyData = mapToTableBody(appraisalSessions);
  return (
    <Card>
      <CardHeader className='card-no-border'>
        <div className='header-top'>
          <H5 className='m-0'>{AllCampaignsTitle}</H5>
          <div className='card-header-right-icon'>
            <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} iconName='icon-more-alt' btn={{ tag: 'span' }} />
          </div>
        </div>
      </CardHeader>
      <CardBody className='pt-0 campaign-table'>
        <div className='recent-table table-responsive currency-table'>
        <Table>
            <thead>
              <tr>
                {['Form Name', 'Due Date', 'Appraisal Period', 'Status', 'Action'].map((item, i) => (
                  <th key={i} className='f-light'>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableBodyData.map((item, i) => (
                <tr key={i}>
                  <td>{item.campaign}</td>
                  <td>{item.date}</td>
                  <td>{item.period}</td>
                  <td><span className='f-light'>{item.status}</span></td>
                  <td>
                    
                  {roleId === "2" ?  <button className="btn btn-primary btn-sm me-2" onClick={() => handleViewClick(item)}>
                      View
                    </button>  : <></>}
                    
                    <button className="btn btn-success btn-sm" onClick={() => handleAnswerClick(item)}>
                      Answer
                    </button>
                  </td>
                  {/* <td>
                    <button className={btn btn-sm ${item.status === 'Completed' ? 'btn-light disabled' : 'btn-primary'}}>
                      {item.status}
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default AllCampaigns;
