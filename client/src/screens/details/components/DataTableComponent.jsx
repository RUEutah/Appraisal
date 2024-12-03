import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import DataTable from 'react-data-table-component';
import { Btn, H4 } from '../../../AbstractElements';
import { Input } from 'reactstrap'

const DataTableComponent = ({respondents, id}) => {
    console.log(respondents)
    const navigate = useNavigate();
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleDelet, setToggleDelet] = useState(false);
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); 
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
    
    const columns = [
        {
            name: 'First Name',
            selector: row => row['firstName'],
            sortable: true,
            center: false,
        },
        {
            name: 'Last Name',
            selector: row => row['lastName'],
            sortable: true,
            center: false,
        },
        {
            name: 'Date',
            selector: row => row?.createdAt,
            sortable: true,
            center: true,
        },
        
        
    ];

   

 

    const handleRowSelected = useCallback(state => {
        setSelectedRows(state.selectedRows);
    }, []);

    /*const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.title)}?`)) {
            setToggleDelet(!toggleDelet);

            setData(data.filter((item) => selectedRows.filter((elem) => elem.id === item.id).length > 0 ? false : true));
            setSelectedRows('');
        }
    };*/

    const handleViewClick = (row) => {
        console.log('Viewing item:', row);
        navigate(`/pages/qna/:layout?id=${row.sessionId}`);     };

    /*
    const filteredData = data.filter(item => {
        return (
            item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.roleName.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });
    */

    const getRespondents = async (id) => {
        try {
          const response = await axios.get(`http://localhost:5000/getrespondents/${id}`);
          console.log(response.data.data);
          //setSessionData(response.data.data.session);
          setData(response.data.data);
        } catch (error) {
          console.error("Error fetching appraisal answers", error);
        }
      };
    
      useEffect(() => {
        getRespondents(id);
    }, []);


    return ( /*
        
            {(selectedRows.length !== 0) &&
                <div className={`d-flex align-items-center justify-content-between bg-light-info p-2`}>
                    <H4 attrH4={{ className: 'text-muted m-0' }}>Delete Selected Data..!</H4>
                    <Btn attrBtn={{ color: 'danger', onClick: () => handleDelete() }}>Delete</Btn>
                </div>
            }
             <div className='d-flex justify-content-end mb-3' >
                <div className='input-group' style={{ width: '400px' }}>
                <Input 
                    className='form-control' 
                    type='search' 
                    placeholder='Search...'
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)} 
                />
                <span className='btn btn-primary input-group-text'>Search</span>
                </div>
            </div>
            */
            <Fragment>
            <DataTable
                data={data}
                columns={[
                    ...columns,
                    {
                        name: 'Action',
                        cell: (row) => (
                            <button className="btn btn-primary btn-sm" onClick={() => handleViewClick(row)}>
                                View Answers
                            </button>
                        ),
                    },
                ]}
                striped={true}
                center={true}
                pagination
                selectableRows
                onSelectedRowsChange={handleRowSelected}
                //clearSelectedRows={toggleDelet}
            />
        </Fragment>
    )
}
export default DataTableComponent