import './App.css';
import Header from './pages/SharedPages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Users from './pages/UsersContainer/Users/Users';
import UserDetail from './pages/UsersContainer/UserDetail/UserDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Users></Users>} ></Route>
        <Route path='/users' element={<Users></Users>} ></Route>
        <Route path='/userDetail' element={<UserDetail></UserDetail>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
