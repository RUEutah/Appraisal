import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'react-feather';
import Img from '../../../src/assets/images/dashboard/avatar.jpg';
import { LI, UL, Image, P } from '../../AbstractElements';
import { Admin, LogOut} from '../../Constant';

const UserHeader = () => {
  const history = useNavigate();
  const [name, setName] = useState(localStorage.getItem('Name'));
  
  const Logout = () => {
    localStorage.removeItem('profileURL');
    localStorage.removeItem('token');
    localStorage.removeItem('auth0_profile');
    localStorage.removeItem('Name');
    localStorage.setItem('authenticated', false);
    history(`${process.env.PUBLIC_URL}/login`);
  };

  return (
    <li className='profile-nav onhover-dropdown pe-0 py-0'>
      <div className='media profile-media'>
      <Image attrImage={{className: 'img-fluid d-inline rounded-circle', src: `${Img}`, alt: '', style: {width: '30px', height: '30px',},}}/>
        <div className='media-body'>
          <span>{name}</span>
          <P attrPara={{ className: 'mb-0 font-roboto' }}>
            {Admin} <i className='middle fa fa-angle-down'></i>
          </P>
        </div>
      </div>
      <UL attrUL={{ className: 'simple-list profile-dropdown onhover-show-div' }}>
        
        <LI attrLI={{ onClick: Logout }}>
          <LogIn />
          <span>{LogOut}</span>
        </LI>
      </UL>
    </li>
  );
};

export default UserHeader;
