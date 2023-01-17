import { Routes, Route } from 'react-router-dom';
import Component1 from './components/component1';
import Component2 from './components/component2';
import Component3 from './components/component3';
import Login from './components/login';
import Logout from './components/logout';
import PrivateLayout from './components/privatelayout';
import NotFound from './components/notfound';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Component1 />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateLayout />} >
        <Route path="/comp2" element={<Component2 />} />
        <Route path="/comp3" element={<Component3 />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
