import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import CenterContent from './component/Content1/CenterContent/CenterContent';
import RightContent from './component/Content1/RightContent/RightContent';
import React, { Component } from 'react';
import {render} from '@testing-library/react';
import LeftContent from './component/Content1/LeftContent/LeftContent';
import Content2 from './component/Content2/Content2';
// import Header from './component/Header';
class App extends Component {
  render() {
    return (
      <div >
        <div>
          <Header/>
        </div>
        
        <div className="row1">
          <div className="colum1">
            <LeftContent />
          </div>
          <div className="colum1">
            <CenterContent />
          </div>
          <div className="colum1">
            <RightContent />
          </div>
        </div>

        
         <div className="row2">
          <Content2 />
        </div> 
        
      </div>
    );
  }
}
export default App;