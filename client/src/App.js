import React from 'react';
import './App.css';
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import { Counter } from './features/counter/Counter';


function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Chat/>
    </div>
  );
}

export default App;
