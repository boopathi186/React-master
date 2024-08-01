import { Route, Routes } from 'react-router-dom';
import './App.css';
import Theme from './Components/Pages/Themes';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import MyProfile from './Components/Content/MyProfile';
import NotFound from './Components/Pages/NotFound';
import UserProfile from './Components/Pages/UserProfile';
import Create from './Components/Pages/CreateUser';
import Update from './Components/Pages/Update';
import SignUp from './Components/Pages/SignUp';
import Login from './Components/Pages/Login';
import PrivateRoute, { PrivateRoutes } from './Components/Pages/PrivateRouter';
import ProductInfo from './Components/Pages/ProductDetails';
import ThemeForm from './Components/Pages/CreateTheme';
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
            <Route path='/theme/create_theme' element={<ThemeForm/>}/>
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
