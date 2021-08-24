import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
    </div>
    <div>
      <section className="mySection">
            <h1>THIS IS FOOTER FOR ALL PAGES</h1>
      </section>
        
    </div>
      </React.Fragment>
    
   )

 }

export default Layout