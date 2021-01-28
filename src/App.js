import React, {useEffect} from 'react';
import './App.css';
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import { auth } from './firebase/firebase';
import {login, logout, selectUser} from './features/userSlice';
import {useDispatch, useSelector} from "react-redux";
import Login from "./Components/Login";
import Bar from "./Bar";

function App() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);


    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                //if user is logged in
                dispatch(
                    login( {
                        uid: authUser.uid,
                        photo: authUser.photoUrl,
                        email: authUser.email,
                        displayName: authUser.displayName,
                    }))
            }
            else {
                //user is logged out
                dispatch(logout());
            }
        });
    }, [dispatch]);
  return (
      <div className="app">
          {user ? (
              <>
                  <Sidebar />
                  <Chat />
              </>
          ) : (
              <Login />
          )}

      </div>
  );
}

export default App;
