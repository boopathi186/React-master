import { Route, Routes  } from 'react-router-dom';
import './App.css';
import Theme from './Components/Pages/Themes';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import MyProfile from './Components/Content/MyProfile';
import Home from './Components/Pages/Home';
import NotFound from './Components/Pages/NotFound';
import UserProfile from './Components/Pages/UserProfile';
import UserInfo from './Components/Pages/User';
import Create from './Components/Pages/CreateUser';
import Update from './Components/Pages/Update';

import SignUp from './Components/Pages/SignUp';
import Login from './Components/Pages/Login';


function App() {
  return (
    <div className='App'>  
       
      <Router>
      
          <Routes>
            <Route exact path='/' element={<SignUp/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route  path='/home' element={<Home />}> </Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/dashboard/themes' element={<Theme/>}></Route>
            <Route path='/theme' element={<Theme />}></Route>
            <Route path='/myprofile' element={<MyProfile />}></Route>
           
            <Route path='/userProfile' element={<UserProfile/>}></Route>
            <Route path='/userProfile/:userId' element={<UserInfo/>}></Route>
            <Route path='/userprofile/create' element={<Create/>}></Route>
            <Route path='/userProfile/update/:id' element={<Update/>}></Route>
             <Route path='*' element={<NotFound/>}></Route>
          </Routes>

      </Router>
    
    </div>
  )
}

export default App;
