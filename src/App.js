import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Header from './Header.js';
import MainContent from './MainContent.js';
import Footer from './Footer';


function App() {
   return (
      <div className="body">
         <Header/>
         <MainContent/>
         <Footer textContent="All rights reserved 2022."/>
      </div>
  );
}

export default App;
