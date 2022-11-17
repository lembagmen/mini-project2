import React from 'react';

class MainContent extends React.Component{
   constructor(props){
      super(props);
   }

   render(){
      return(
         <div className='container-fluid row p-3 m-0'>
            <div className="transactions col-sm-8 text-center pt-2">
               <div className='container-fluid row'>
                  <div className="table-responsive col-sm-3 row">
                     <table className="table fieldLength">
                        <tr>
                           <td className="tableHeader">Category</td>
                        </tr>
                        <tr>
                           <td>
                              <select className="fieldLength category bg-white" name="Category">
                                 <option value="">Category 1</option>
                                 <option value="">Category 2</option>
                                 <option value="">Category 3</option>
                                 <option value="">Category 4</option>
                                 <option value="">Category 5</option>
                                 <option value="">Category 6</option>
                                 <option value="">Category 7</option>
                                 <option value="">Category 8</option>
                                 <option value="">Category 9</option>
                                 <option value="">Category 10</option>
                              </select>
                           </td>
                        </tr>
                     </table>
                  </div>

                  <div className="table-responsive col-sm-3 row">
                     <table className='table fieldLength'>
                        <tr>
                           <td className="tableHeader">Supplier</td>
                        </tr>
                        <tr>
                           <td>
                              <select className="fieldLength supplier bg-white" name="Supplier">
                                 <option value="">Supplier 1</option>
                                 <option value="">Supplier 2</option>
                                 <option value="">Supplier 3</option>
                                 <option value="">Supplier 4</option>
                                 <option value="">Supplier 5</option>
                              </select>
                           </td>
                        </tr>
                     </table>
                  </div>

                  <div className="table-responsive col-sm-3 row">
                     <table className='table fieldLength'>
                        <tr>
                           <td className=" tableHeader">Location</td>
                        </tr>
                        <tr>
                           <td>
                              <select className="fieldLength location bg-white" name="Location">
                                 <option value="">Location 1</option>
                                 <option value="">Location 2</option>
                                 <option value="">Location 3</option>
                                 <option value="">Location 4</option>
                                 <option value="">Location 5</option>
                              </select>
                           </td>
                        </tr>
                     </table>
                  </div>

                  <div className="table-responsive col-sm-3 row">
                     <table className='table fieldLength'>
                        <tr>
                           <td className=" tableHeader">Description</td>
                        </tr>
                        <tr>
                           <td>
                              <select className="fieldLength description bg-white" name="Description">
                                 <option value="">Description 1</option>
                                 <option value="">Description 2</option>
                                 <option value="">Description 3</option>
                                 <option value="">Description 4</option>
                                 <option value="">Description 5</option>
                              </select>
                           </td>
                        </tr>
                     </table>
                  </div>
               </div>
               
               <div className="table-responsive overflow">
                  <table className="table table-striped table-hover table-bordered">
                     <thead className="tableHeader">
                        <tr>
                           <th>ID</th>
                           <th>Category</th>
                           <th>Supplier</th>
                           <th>Location</th>
                           <th>Product Description</th>
                           <th>Quantity</th>
                           <th>Date of Transaction</th>
                        </tr>
                     </thead>
                     <tbody className="tableStriped">
                        <tr>
                           <td>1</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>2</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>3</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>4</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>5</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>6</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>7</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>8</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>9</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>10</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>11</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>12</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>13</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>14</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr>
                           <td>15</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
            <div className="dashboard col-sm-4 text-center">Dashboard</div>
         </div>
      );
   }
}

export default MainContent;