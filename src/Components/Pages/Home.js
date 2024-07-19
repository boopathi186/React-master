import myprofile from '../Assets/myprofile.png';
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/Header";
import { NavLink } from 'react-router-dom';
import Toggle from '../Toggle/Toggle';

const Home = () => {
    return (
        <div>
            <div className="row m-0 p-0">
                <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow d-lg-block d-none">
                    <Sidebar />
                </div>
                <div className="col-xl-10 col-lg-10 p-0 m-0">
                    <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header />
                    </div>
                    <div className='d-lg-none d-block shadow'><Toggle/></div>
                    <div className="mt-5">
                        <h1 className="text-center text-danger">...  Welcome to my Home  ...</h1>
                    </div>
                    {/* user profile */}
                    <div className="row d-flex flex-row   m-0 mx-2 mt-4">
                        <div className="col bg-white bg-opacity-25 p-5 mx-2 shadow rounded-2 fs-3">
                            <NavLink className='text-decoration-none text-dark' to="/userProfile">
                                <img className="" src={myprofile} width={25} height={25} alt='profile_img' /> User Profiles
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;