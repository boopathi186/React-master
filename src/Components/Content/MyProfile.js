import { useState } from 'react';
import Profile from '../Assets/profilepic.png';
import Exit from '../Buttons/CancelButton';
import EditButton from '../Buttons/EditButton';
import Save from '../Buttons/SaveButton';
import '../Css/Contentstyle.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/sidebar';

const MyProfile = () => {
    const [formData, setformData] = useState(
        {
            Name: "", Email: "", Address: "", Age: "", Degree: "", Role: "", Skills: "", Specs: "",
        }
    );

    // for input value
    const handlChange = (event) => {
        setformData(event.target.id = event.target.value);
    }
    const [isEdit, setisEdit] = useState(true);
    const IsEnable = () => {
        setisEdit(!isEdit)
    }
    // clear the input
    const clearInputField = () => {
        setformData({
            Name: "", Email: "", Address: "", Age: "", Degree: "", Role: "", Skills: "", Specs: "",
        });
    }
    return (
        <div className='row m-0 p-0'>
            <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow d-lg-block d-none">
                <Sidebar />
            </div>
            <div className="col-xl-10 col-lg-10 p-0 m-0">
                <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                    {/* props */}
                    <Header Name={formData.Name} Email={formData.Email} />

                </div>
                <div className="innercontent row d-flex flex-row p-0 m-0 mt-4 mb-3 bg-white border border-light shadow border-opacity-25 rounded-3 mx-3 ">
                    <div className="col-xl-3 col-lg-4  col-md-4   mt-3 col-sm-12  text-center">

                        <div className="row border border-light border-2 mx-xl-4 mx-lg-2 mx-md-2  mx-4 mt-2 rounded ">
                            <img src={Profile} width={50} height={130} class="rounded-circle px-5 mt-2" alt="Cinque Terre" />
                            <h6 id='name'>{formData.Name ? formData.Name : 'Guest'}</h6>
                            <p className="" id='email'><small>{formData.Email}</small></p></div>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 ">
                        {/* forms */}
                        <form className='m-0 p-0' id='forms'>
                            <div className='row m-0 p-0'>
                                <div className="col-6 p-0 m-0 mt-3 fs-6 fw-semibold text-md-start text-center">Account Details</div>
                                <div className="col-6 p-0 m-0 mt-2 fs-6 fw-semibold text-end ">
                                    <EditButton IsEnable={IsEnable} />
                                </div>
                            </div>
                            <div className="row row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-1 g-2 mb-4 mt-3">
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold">Name</label>
                                        <input type="text" value={formData.Name} onChange={handlChange} disabled={isEdit} className="mt-2 py-2 text-secondary text-opacity-50  form-control
                             border border-secondary border-opacity-10"
                                            placeholder="Enter your name" id="Name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Email Address</label>
                                        <input type="text" value={formData.Email} onChange={handlChange} disabled={isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2 
                                           border-secondary  border-opacity-10"
                                            placeholder="Enter your e-mail" id="Email" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Role</label>
                                        <input type="text" value={formData.Role} onChange={handlChange} disabled={isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-50 border border-2 
                             border-secondary  border-opacity-10"
                                            placeholder="Enter your role" id="Role" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Age</label>
                                        <input type="text" value={formData.Age} onChange={handlChange} disabled={isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2 
                             border-secondary  border-opacity-10"
                                            placeholder="Enter your age" id="Age" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Address</label>
                                        <input type="text" value={formData.Address} onChange={handlChange} disabled={isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2 
                               border-secondary border-opacity-10"
                                            placeholder="Enter your address" id="Address" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Degree</label>
                                        <input type="text" value={formData.Degree} onChange={handlChange} disabled={isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2  
                            border-secondary  border-opacity-10"
                                            placeholder="Enter your degree" id="Degree" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Specilization</label>
                                        <input type="text" value={formData.Specs} onChange={handlChange} disabled={isEdit} className="mt-2 py-2 form-control  text-secondary text-opacity-50  border border-2 
                             border-secondary  border-opacity-10"
                                            placeholder="Enter your specilization" id="Specs" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Skills</label>
                                        <input type="text" value={formData.Skills} onChange={handlChange} disabled={isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-25    border border-2 
                             border-secondary  border-opacity-10"
                                            placeholder="Enter your skills" id="Skills" />
                                    </div>
                                </div>

                            </div>
                        </form>
                        {/* Buttons */}
                        <div className='text-md-end text-center mb-2' >
                            <Save id="save" IsEnable={IsEnable} /> <Exit id="exit" clearInputField={clearInputField} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default MyProfile;