import '../Css/Sidebar.css';
import hotdeck from '../Assets/Frame 629075.png';
import themes from '../Assets/Themes.png';
import decks from '../Assets/Decks.png';
import challenges from '../Assets/Challenges.png';
import customer from '../Assets/Customers.png';
import admin from '../Assets/Admin.png';
import roles from '../Assets/Roles.png';
// index.js or App.js
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
  return (

    <div className="col-12 sidebar bg-white h-100 vh-100 m-0 p-0">
      <div className="col-12 text-center">
        <img className="mt-3" src={hotdeck} alt='hotdeck_image' />
      </div>
      <a className="dashboard  nav-link" href="fgh">
        <div className="col-12 mt-4 py-3 mx-2 ms-3 text-danger  fw-semibold">  <i className="bi bi-speedometer2"></i> Dashboard</div>
      </a>
      <a className="themes nav-link" href="fgh">
        <div className="col-12 mt-4 py-3 ms-3  mx-2 text-secondary text-opacity-50 fw-semibold"><img className="" src={themes} width={18} height={18} alt='themes_image' /> Themes</div>
      </a>
      <a className="dashborad  nav-link" href="fgh">
        <div className="col-12 mt-4 py-3 ms-3  mx-2  text-secondary text-opacity-50 fw-semibold"> <img className="" src={decks} width={18} height={18} alt='decks_image' /> Decks</div>
      </a>
      <a className="dashborad  nav-link" href="fgh">
        <div className="col-12 mt-4 py-3 ms-3  mx-2  text-secondary text-opacity-50 fw-semibold"><img className="" src={challenges} width={18} height={18} alt='challenge_image' /> Challenges</div>
      </a>
      <a className="dashborad  nav-link" href="fgh">
        <div className="col-12 mt-4 py-3 ms-3  mx-2  text-secondary text-opacity-50 fw-semibold"><img className="" src={customer} width={18} height={18} alt='customer_image' /> Customers</div>
      </a>
      <a className="dashborad  nav-link" href="fgh">
        <div className="col-12 mt-4 py-3 ms-3  mx-2  text-secondary text-opacity-50 fw-semibold"><img className="" src={admin} width={18} height={18} alt='admin_image' /> Admin User  Management</div>
      </a>
      <a className="dashborad  nav-link" href="fgh">
        <div className="col-12 mt-4 py-3 ms-3  mx-2 text-secondary text-opacity-50 fw-semibold"><img className="" src={roles} width={18} height={18} alt='role_image' /> Roles and Permissions</div>
      </a>
    </div>

  );

}
export default Sidebar;