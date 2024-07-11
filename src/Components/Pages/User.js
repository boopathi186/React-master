import { useParams } from "react-router-dom";
import Usersdetail from "./Usersdata";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/Header";
const UserInfo = () => {

    const { userId } = useParams();
    const users = Usersdetail.find(user => (user.id === parseInt(userId)));
    if (!users) return <p>Page Not found</p>
    return (
        <div>
         {/* Sidebar and Header */}
            <div className="row m-0 p-0">
                <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow d-lg-block d-none">
                    <Sidebar />
                </div>
                <div className="col-xl-10 col-lg-10 p-0 m-0">
                    <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header />
                    </div>
                    {/* To print details of the user */}
                    <div className="row  text-danger p-0 m-0 mx-2 mt-4">
                           <h1>Name : {users.Name}</h1>
                           <h1>Email : {users.Email}</h1>
                           <h1>Ph_no : {users.Ph_no}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserInfo;