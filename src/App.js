import { Route, Routes } from 'react-router-dom';
import './App.css';
import Theme from './pages/Themes';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MyProfile from './pages/MyProfile.jsx';
import NotFound from './pages/NotFound';
import UserProfile from './pages/UserProfile.tsx';
import Create from './pages/CreateUser.tsx';
import Update from './pages/Update.jsx';
import SignUp from './components/forms/SignUp';
import Login from './components/forms/Login.jsx';
import PrivateRoute, { PrivateRoutes } from './components/private-Router/PrivateRouter.jsx';
import ProductInfo from './pages/ProductDetails.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
 
      <Router>
        <Routes>
          <>
            <Route element={<PrivateRoutes />}>
              <Route exact path='/' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
            </Route>
          </>
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/userProfile' element={<UserProfile />} />
            <Route path='/dashboard/themes' element={<Theme />}></Route>
            <Route path='/theme' element={<Theme />} />
            <Route path='/myprofile' element={<MyProfile />} />
            <Route path='/userProfile/:userId' element={<ProductInfo />} />
            <Route path='/userprofile/create' element={<Create />} />
            <Route path='/userProfile/update/:id' element={<Update />} />
            <Route path='*' element={<NotFound />} />
          </Route>

        </Routes>

      </Router>

    </div>
  )
}

export default App;
