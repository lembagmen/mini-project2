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
                  <div className="table-responsive col-sm-2 row">
                     <table className="table ID">
                        <tr>
                           <td className="tableHeader">ID</td>
                        </tr>
                        <tr>
                           <td>
                              <select className="ID category bg-white" name="ID">
                                 <option value="">ID 1</option>
                                 <option value="">ID 2</option>
                                 <option value="">ID 3</option>
                              </select>
                           </td>
                        </tr>
                     </table>
                  </div>
                  <div className="table-responsive col-sm-2 row">
                     <table className="table categ">
                        <tr>
                           <td className="tableHeader">Category</td>
                        </tr>
                        <tr>
                           <td>
                              <select className="categ category bg-white" name="Category">
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

                  <div className="table-responsive col-sm-2 row">
                     <table className='table supplier'>
                        <tr>
                           <td className="tableHeader">Supplier</td>
                        </tr>
                        <tr>
                           <td>
                              <select className="supplier category bg-white" name="Supplier">
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

                  <div className="table-responsive col-sm-2 row">
                     <table className='table location'>
                        <tr>
                           <td className=" tableHeader">Location</td>
                        </tr>
                        <tr>
                           <td>
                              <select className="location category bg-white" name="Location">
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

                  <div className="table-responsive col-sm-2 row">
                     <table className='table description'>
                        <tr>
                           <td className=" tableHeader">Description</td>
                        </tr>
                        <tr>
                           <td>
                              <select className="description category bg-white" name="Description">
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

                  <div className="table-responsive col-sm-2 row ms-5">
                     <table className='table'>
                        <tr>
                           <td className='btn-nt'>
                              <button className="btn">NEW TRANSACTION</button>
                           </td>
                        </tr>
                        <tr>
                           <td className='btn-upd'>
                              <button className="btn">UPDATE</button>
                           </td>
                        </tr>
                        <tr>
                           <td className='btn-del'>
                           <button className="btn">DELETE</button>
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