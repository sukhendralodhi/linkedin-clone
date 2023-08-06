import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Login from './Login/Login';
import Widgets from './Widgets/Widgets';

function App() {
  const [user, setUser] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(true);
  }
  return (
    <div className="App">
      {/*Header Start*/}
      <Header />
      {
        !user ? (<Login handleLogin={handleLogin} />) : (
          <div className="app_body">
            {/*Sidebar Start*/}
            <Sidebar />
            {/*Sidebar End*/}
            {/*Feed Start*/}
            <Feed />
            {/*Feed End*/}
            {/*Widgets Start*/}
            <Widgets />
            {/*Widgets End*/}
          </div>
        )
      }
      {/*Header End*/}
      {/*App Body Start*/}

      {/*App Body End*/}
    </div>
  );
}

export default App;
