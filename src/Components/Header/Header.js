import Dropdown from 'react-bootstrap/Dropdown';
import myprofile from '../Assets/myprofile.png';
import lock from '../Assets/lock.png';
import logout from '../Assets/logout.png';
import profilepic from '../Assets/profilepic.png';
import { Link } from 'react-router-dom';
const Header = (props) => {
    let name = props.userName;
    return (
        <Dropdown>
            <Dropdown.Toggle variant="bg-secondary border py-1  mb-2 mt-2 bg-light bg-opacity-10 m-0" id="dropdown-basic">
                <img className="rounded-circle text-start p-0 mx-2" src={profilepic} width={20} height={20} alt='hotdeck_image' /> {name}
            </Dropdown.Toggle>
            <Dropdown.Menu variant=" white shadow   border-white m-0 p-0 ">
                <Dropdown.Item ><img className="" src={myprofile} width={18} height={18} alt='hotdeck_image' />
                    <Link className='text-decoration-none text-dark' to='/myprofile' >My profile </Link></Dropdown.Item>
                <Dropdown.Item >
                    <img className="" src={lock} width={18} height={18} alt='hotdeck_image' /> change Password
                </Dropdown.Item>
                <Dropdown.Item>
              <img className="" src={logout} width={18} height={18} alt='hotdeck_image' /> 
              <Link className='text-decoration-none text-dark' to={'/login'} > Logout</Link>   
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
export default Header;
