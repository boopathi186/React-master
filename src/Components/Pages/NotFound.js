import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";
import Toggle from "../Toggle/Toggle";

const NotFound = () => {
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
                    <div className='d-lg-none d-block shadow'><Toggle /></div>
                    Page Not Found :)
                    
                </div>
            </div>
        </div>
    );
}
export default NotFound;