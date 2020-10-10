import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Chat/>
    </div>
  );
}

export default App;
