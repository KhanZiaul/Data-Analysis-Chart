import React from 'react';
import Header from './components/Header/Header'
import DashBoard from './components/DashBoard/DashBoard';
import Axios from './components/Axios/Axios';
const App = () => {
  return (
    <div>
      <Header></Header>
      <DashBoard></DashBoard>
      <Axios></Axios>
    </div>
  );
};

export default App;