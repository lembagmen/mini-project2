import React from 'react';
import logo from './logo.png';

class Header extends React.Component{
   constructor(props){
      super(props);
   }

   render(){
      return(
         <nav className="navbar navbar-expand-sm">
            <div className="container-fluid col-sm-8">
               <img className="logo me-5 pe-3" src={logo} alt="metaInventoryLogo" title="Meta Inventory"></img>
               <div className="collapse navbar-collapse ms-3" id="navbar_toggler">
                  <div className="navbar-nav nav nav-pills card-header-pills">
                     <ul className="list-inline">
                        <li className="list-inline-item px-5 ms-5">Transactions</li>
                        <li className="list-inline-item px-5">Query/Reports</li>
                        <li className="list-inline-item px-5">Administration</li>
                     </ul>
                  </div>
               </div>
            </div>
         </nav>
      );
   }
}

export default Header;