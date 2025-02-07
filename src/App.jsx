import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Chat from './components/pages/Chat.jsx';
import Dashboard from './components/pages/Dashboard.jsx';
import Calendar from './components/pages/Calendar.jsx';
import Documents from './components/pages/Documents.jsx';
import Landing from './components/pages/Landing.jsx'
import { GoogleLogin } from '@react-oauth/google';
function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);
  return (
    <Router>
      <div className='flex flex-row'>
        <Sidebar />
        <div className='flex-grow'>
          <Routes>
            <Route
              path="/"
              element={<Landing />}
            />
            <Route
              path="/chat"
              // element={user?.email ? <Dashboard user={user} /> : <Landing/>}
              element={<Chat />}
            />
            <Route
              path="/documents"
              element={<Documents />}
            />
            <Route
              path="/calendar"
              element={<Calendar />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
