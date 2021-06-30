import React from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import './header.style.scss';
import { auth } from '../../firebase/firebase.uitils';


const Header = () => {
   
   const currentUser  = useSelector((state) => state.user.currentUser);

   console.log(currentUser);

   return( <div className='header'>
       

      <div className='options'>
         <Link className='option' to='/'>
           Home
         </Link>
         <Link className='option' to="/shop">
            SHOP
         </Link>
         <Link className='option' to="/Contact">
            CONTACT
         </Link>
         {
            currentUser ?
            <div className='option' onClick={() =>auth.signOut()}>SIGNOUT</div>
            :
            <Link className='option' to='/signin'>SignIn</Link>
         }
        </div> 
    </div>
 )
}
export default Header;
