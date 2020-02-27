import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {

  logout = () => {
    console.log('Logout placeholder')
  };

  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark statictop'>
        <div className='container'>
          <NavLink className='navbar-brand' to='/'>
             DGBook
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
              <ul className='navbar-nav ml-auto'>
                  <li className='nav-item'>
                    <NavLink
                      exact
                      to='/'
                      className='nav-link'
                      activeClassName='active'>
                      Home
                     </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      to='/create-book'
                      className='nav-link'
                      activeClassName='active'>
                      Create New Book
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                   <NavLink
                      to='/login'
                      className='nav-link'
                      activeClassName='active'>
                      Login
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      to='/register'
                      className='nav-link'
                      activeClassName='active'>
                      Register
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <button
                      onClick={this.logOut}
                      className='btn btn-link nav-link'>
                      Logout
                    </button>
                  </li>
                 </ul>
                </div>
              </div>
             </nav>
       );
     }
   }
   
    export default Header;

