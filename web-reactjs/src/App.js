import Home from './pages/Dashboard';
import './App.css';
import Login from './pages/authPages/Login';
import Register from './pages/authPages/Register';

import { Routes, Route } from "react-router-dom";
import EditProfile from './pages/authPages/EditProfile';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';
import Messages from './pages/Messages';
import Events from './pages/Events';
import Account from './pages/Account';

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/edit-profile' element={<EditProfile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/events' element={<Events />} />
        <Route path='/account' element={<Account />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
