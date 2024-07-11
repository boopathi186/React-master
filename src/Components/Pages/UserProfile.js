import myprofile from '../Assets/myprofile.png';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";
import Usersdetail from "./Usersdata";
const Users = () => {
 
  return (
    <div>

      <div className="row m-0 p-0">
        <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow d-lg-block d-none">
          <Sidebar />
        </div>
        <div className=" col-12 col-xl-10 col-lg-10 p-0 m-0">
          <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
            <Header />
          </div>
            {/* To iterate the user details using map*/}

          <div className="row p-1 m-0 mt-4 ">
              {Usersdetail.map(user => (
 
 <div className="col col-md-4 gy-3 bg-success bg-opacity-25 p-5 mx-2 shadow-sm rounded-2 fs-3">
                  <Link className="text-decoration-none " to={`/userProfile/${user.id}`}>
                    <img className="" src={myprofile} width={30} height={30} />User {user.id}</Link>
                </div> 
              ))}
          </div>
        </div> 
      </div>
    </div>
  );
}
export default Users;