import { Route, Routes } from 'react-router-dom';
import './App.css';
import Theme from './Pages/Themes';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import MyProfile from './Pages/MyProfile.jsx';
import NotFound from './Pages/NotFound';
import UserProfile from './Pages/UserProfile.tsx';
import Create from './Pages/CreateUser.tsx';
import Update from './Pages/Update.jsx';
import SignUp from './Components/Forms/SignUp';
import Login from './Components/Forms/Login.jsx';
import PrivateRoute, { PrivateRoutes } from './Components/PrivateRouter/PrivateRouter.jsx';
import ProductInfo from './Pages/ProductDetails.tsx';
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
