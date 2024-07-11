
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";


const Dashboard = () => {
    return (
        <div>
            <div className="row m-0 p-0">
                <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow">
                    <Sidebar />
                </div>
                <div className="col-xl-10 col-lg-10 p-0 m-0">
                    <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header />
                    </div>
                    <div className="row d-flex flex-row   m-0 mx-2 mt-4">
                        <div className="col bg-secondary bg-opacity-25 p-5 mx-2 shadow-sm rounded-2 fs-3">Themes</div>
                        <div className="col bg-danger bg-opacity-25 p-5 mx-2  shadow-sm rounded-2 fs-3">Decks</div>
                        <div className="col bg-success bg-opacity-25 p-5  mx-2  shadow-sm rounded-2 fs-3">Challenges</div>
                        <div className="col bg-primary bg-opacity-25 p-5 mx-2 shadow-sm rounded-2 fs-3">Customers</div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Dashboard;