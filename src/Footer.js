import React from 'react';

class Footer extends React.Component{
   constructor(props){
      super(props);
   }

   render(){
      return(
         <div className='footer text-center py-4'>{this.props.textContent}</div>
      );
   }
}
export default Footer;