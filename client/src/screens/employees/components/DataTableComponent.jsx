import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { Btn, H4 } from '../../../AbstractElements';




const DataTableComponent = ({toggle, setUser, users}) => {
    const navigate = useNavigate();
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleDelet, setToggleDelet] = useState(false);
    const [appraisalSessions, setAppraisalSessions] = useState([]);
    const [data, setData] = useState([]);

    
    const [modal, setModal] = useState(false);

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
            name: 'Email',
            selector: row => row?.email,
            sortable: true,
            center: true,
        },
        {
            name: 'Role',
            selector: row => row?.roleName,
            sortable: true,
            center: true,
        },
        {
            name: 'Department',
            selector: row => row?.departmentName,
            sortable: true,
            center: true,
        }
    ];

    const handleRowSelected = useCallback(state => {
        setSelectedRows(state.selectedRows);
    }, []);

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.title)}?`)) {
            setToggleDelet(!toggleDelet);

            setData(data.filter((item) => selectedRows.filter((elem) => elem.id === item.id).length > 0 ? false : true));
            setSelectedRows('');
        }
    };

    const handleViewClick = (row) => {
        setUser(row)
        toggle()
    };

    
    return (
        <Fragment>
            {(selectedRows.length !== 0) &&
                <div className={`d-flex align-items-center justify-content-between bg-light-info p-2`}>
                    <H4 attrH4={{ className: 'text-muted m-0' }}>Delet Selected Data..!</H4>
                    <Btn attrBtn={{ color: 'danger', onClick: () => handleDelete() }}>Delete</Btn>
                </div>
            }

            <DataTable
                data={users}
                columns={[
                    ...columns, 
                    {
                        name: 'Action',
                        cell: (row) => (

                            
                            <button className="btn btn-primary btn-sm" onClick={()=> handleViewClick(row)}>
                                View
                            </button>
                            
                        ),
                    },
                ]}
                striped={true}
                center={true}
                pagination
                selectableRows
                onSelectedRowsChange={handleRowSelected}
                clearSelectedRows={toggleDelet}
            />
        </Fragment>
    )
}
export default DataTableComponent