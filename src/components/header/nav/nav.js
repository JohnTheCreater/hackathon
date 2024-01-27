import React from 'react';
import {NavLink} from 'react-router-dom';



function Nav() {
    return(
        <> 
            
        <nav className='flex gap-4'>
            <NavLink exact to='/home'className={(navData) => navData.isActive ? 'm-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : 'm-2 mb-0 text-black' }> Home</NavLink>
            <NavLink to='/dashboard' className={(navData) => navData.isActive ? 'm-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : 'm-2 mb-0 text-black' }>Expenses</NavLink>
            <NavLink to='/customers'className={(navData) => navData.isActive ? 'm-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : 'm-2 mb-0 text-black' }>Tax & Billing</NavLink>
            <NavLink to='/R&M' className={(navData) => navData.isActive ? 'm-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : 'm-2 mb-0 text-black' }>Repair & maintainance</NavLink>
        </nav>
        </>
       
    );
}

export default Nav;