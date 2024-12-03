import React from 'react';
import { Media } from 'reactstrap';
import { Image } from '../../AbstractElements';
import user1 from '../../assets/images/user/1.jpg';
import user2 from '../../assets/images/user/2.png';
import user3 from '../../assets/images/user/3.jpg';
import user4 from '../../assets/images/user/3.png';
import user5 from '../../assets/images/user/4.jpg';
import user6 from '../../assets/images/user/5.jpg';
import user7 from '../../assets/images/user/6.jpg';
import user8 from '../../assets/images/user/7.jpg';
import user9 from '../../assets/images/user/8.jpg';
import user10 from '../../assets/images/user/9.jpg';
import user11 from '../../assets/images/user/10.jpg';
import user12 from '../../assets/images/user/11.png';
import user13 from '../../assets/images/user/12.png';
//import DefaultButton from '../../Components/Buttons/Default';


export const dummytabledata = [
    {
        id: 1,
        name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user1}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Airi Satou</div>
            </Media>
        </Media>,
        date: '2023/04/27',
        invoice: '#PX0101',
        designation: 'System Architect',
        email : 'test@yahoo.com'
    },
    {
        id: 2,
        name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user2}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Thomas Taylor</div>
            </Media>
        </Media>,
        date: '2023/04/22',
        invoice: '#RF304f',
        designation: 'Maintenace service',
        department: 'R&D',
        email : 'test@yahoo.com'

    },
    {
        id: 3,
        name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user3}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Michael Morris</div>
            </Media>
        </Media>,
        date: '2023/05/21',
        invoice: '#DNJ480',
        designation: 'Junior Technical Author	',
        department: 'R&D',
        email : 'test@yahoo.com'
    },
    {
        id: 4,
        name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user4}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Tiger Nixon</div>
            </Media>
        </Media>,
        date: '2023/03/09',
        invoice: '#G189d0',
        designation: 'Senior Javascript Developer',
        department: 'R&D',
        email : 'test@yahoo.com'
    },
    {
        id: 5,
        name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user5}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Garrett Winters</div>
            </Media>
        </Media>,
        date: '2023/04/10',
        invoice: '#31D8FFS',
        designation: 'Accountant',
        department: 'R&D',
        email : 'test@yahoo.com'

    },
    {
        id: 6,
        name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user6}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Carolyn Jones</div>
            </Media>
        </Media>,
        date: '2023/06/12',
        invoice: '#G189D4',
        designation: 'General service',
        department: 'R&D',
        email : 'test@yahoo.com'
    },
    {
        id: 7,
        name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user7}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Glen Matney</div>
            </Media>
        </Media>,
        date: '2023/04/25',
        invoice: '#PX2101',
        designation: 'System Architect',

    },
    {
        id: 8,
        name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user8}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Ashton Cox</div>
            </Media>
        </Media>,
        date: '2023/06/09',
        invoice: '#px0101',
        designation: 'System Architect',
    },
    {
        id: 9,
        name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user9}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Tiger Nixon</div>
            </Media>
        </Media>,
        date: '2023/01/11',
        invoice: '#G5384H',
        designation: 'General service',

    },
    {
        id: 10,
        name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user10}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Brielle Williamson</div>
            </Media>
        </Media>,
        date: '2023/04/02',
        invoice: '#E5384H',
        designation: 'System Architect',

    },
    {
        id: 11,
        name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user11}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Charles Kubik</div>
            </Media>
        </Media>,
        date: '2023/05/01',
        invoice: '#JK384H',
        designation: 'System Architect',
    },
    {
        id: 12,
        name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user12}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Brielle Williamson</div>
            </Media>
        </Media>,
        date: '2023/07/04',
        invoice: '#HY5384H',
        designation: 'General service',
    },
    {
        id: 13,
        name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user13}`, alt: 'Generic placeholder image' }} />
            <Media body className="align-self-center">
                <div>Kevin Dawson</div>
            </Media>
        </Media>,
        date: '2022/04/06',
        designation: 'System Architect'

    }
];

export const tableColumns = [
    {
        name: 'Name',
        selector: row => row['name'],
        sortable: true,
        center: false,
    },
    {
        name: 'Date',
        selector: row => `${row.date}`,
        sortable: true,
        center: true,
    },
    {
        name: 'Job Designation',
        selector: row => `${row.designation}`,
        sortable: true,
        center: true,
    },
    {
        
    }
    
];

export const tableColumns2 = [
    {
        name: 'Name',
        selector: row => row['name'],
        sortable: true,
        center: false,
    },
    {
        name: 'Role',
        selector: row => `${row.designation}`,
        sortable: true,
        center: true,
    },
    {
        name: 'Department',
        selector: row => `${row.department}`,
        sortable: true,
        center: true,
    },
    {
        name: 'Email',
        selector: row => `${row.email}`,
        sortable: true,
        center: true,
    }
];