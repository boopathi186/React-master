import '../Css/Sidebar.css';
import hotdeck from '../Assets/Frame 629075.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="col-12 sidebar bg-white h-100 vh-100 m-0 p-0">
      <div className="col-12 text-center">
        <img className="mt-3" src={hotdeck} alt='hotdeck_image' />
      </div>
      <div className="col-12 mt-4 py-3  text-danger  fw-semibold">
        <i className="bi bi-speedometer2"></i><Link className='text-decoration-none text-danger' to='/dashboard'> Dashboard</Link></div>
      <div className="col-12 mt-4 py-3 text-secondary text-opacity-50 fw-semibold">
      <i className="bi bi-journals"></i>
        <Link className='text-decoration-none  text-secondary' to='/theme'> Themes</Link> </div>
      <div className="col-12 mt-4 py-3  text-secondary text-opacity-50 fw-semibold">
      <i className="bi bi-card-text"></i> Decks</div>
      <div className="col-12 mt-4 py-3    text-secondary text-opacity-50 fw-semibold">
      <i className="bi bi-question-circle-fill"></i> Challenges</div>
      <div className="col-12 mt-4 py-3  text-secondary text-opacity-50 fw-semibold">
      <i className="bi bi-people-fill"></i> Customers</div>
      <div className="col-12 mt-4 py-3  text-secondary text-opacity-50 fw-semibold">
      <i className="bi bi-sliders"></i> Admin User  Management</div>
      <div className="col-12 mt-4 py-3   text-secondary text-opacity-50 fw-semibold">
      <i className="bi bi-file-earmark-text-fill"></i> Roles and Permissions</div>

    </div>

  );

}
export default Sidebar;