import { Route, Routes } from 'react-router-dom';
import './App.css';
import Theme from './Components/Pages/Themes';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={ <Dashboard/>}>
           
          </Route>
          <Route path='/theme' element={<Theme/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
