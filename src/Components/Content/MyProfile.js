import { useState } from 'react';
import Profile from '../Assets/profilepic.png';
import Exit from '../Buttons/CancelButton';
import EditButton from '../Buttons/EditButton';
import Save from '../Buttons/SaveButton';
import '../Css/Contentstyle.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/sidebar';

const MyProfile = () => {
    const [userName, setName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userRole, setRole] = useState('');
    const [userAge, setAge] = useState('');
    const [userAddress, setAddress] = useState('');
    const [userDegree, setDegree] = useState('');
    const [userSpecs, setSpecs] = useState('');
    const [userskills, setskills] = useState('');
    const [isEdit, setisEdit] = useState(true);
    const IsEnable = () => {
        setisEdit(!isEdit)
    }
    // for input value
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleRoleChange = (event) => {
        setRole(event.target.value);
    }
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }
    const handleDegreeChange = (event) => {
        setDegree(event.target.value);
    }
    const handleSpecsChange = (event) => {
        setSpecs(event.target.value);
    }
    const handleSkillsChange = (event) => {
        setskills(event.target.value);
    }
    // clear the input
    const clearInputField = () => {
        setEmail('');
        setAddress('');
        setAge('');
        setDegree('');
        setName('');
        setRole('');
        setskills('');
        setSpecs('');

    }
    return (
        <div className='row m-0 p-0'>
            <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow d-lg-block d-none">
                <Sidebar />
            </div>
            <div className="col-xl-10 col-lg-10 p-0 m-0">
                <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                    {/* props */}
                    <Header userName={userName} userEmail={userEmail} />

                </div>
                <div className="innercontent row d-flex flex-row p-0 m-0 mt-4 mb-3 bg-white border border-light shadow border-opacity-25 rounded-3 mx-3 ">
                    <div className="col-xl-3 col-lg-4  col-md-4   mt-3 col-sm-12  text-center">

                        <div className="row border border-light border-2 mx-xl-4 mx-lg-2 mx-md-2  mx-4 mt-2 rounded ">
                            <img src={Profile} width={50} height={130} class="rounded-circle px-5 mt-2" alt="Cinque Terre" />
                            <h6 id='name'>{userName ? userName : 'Guest'}</h6>
                            <p className="" id='email'><small>{userEmail}</small></p></div>
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
                                        <input type="text" value={userName} onChange={handleNameChange} disabled={isEdit} className="mt-2 py-2 text-secondary text-opacity-50  form-control
                             border border-secondary border-opacity-10"
                                            placeholder="Enter your name" id="name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Email Address</label>
                                        <input type="text" value={userEmail} onChange={handleEmailChange} disabled={isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2 
                                           border-secondary  border-opacity-10"
                                            placeholder="Enter your e-mail" id="name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Role</label>
                                        <input type="text" value={userRole} onChange={handleRoleChange} disabled={isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-50 border border-2 
                             border-secondary  border-opacity-10"
                                            placeholder="Enter your role" id="name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Age</label>
                                        <input type="text" value={userAge} onChange={handleAgeChange} disabled={isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2 
                             border-secondary  border-opacity-10"
                                            placeholder="Enter your age" id="name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Address</label>
                                        <input type="text" value={userAddress} onChange={handleAddressChange} disabled={isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2 
                               border-secondary border-opacity-10"
                                            placeholder="Enter your address" id="name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Degree</label>
                                        <input type="text" value={userDegree} onChange={handleDegreeChange} disabled={isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2  
                            border-secondary  border-opacity-10"
                                            placeholder="Enter your degree" id="name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Specilization</label>
                                        <input type="text" value={userSpecs} onChange={handleSpecsChange} disabled={isEdit} className="mt-2 py-2 form-control  text-secondary text-opacity-50  border border-2 
                             border-secondary  border-opacity-10"
                                            placeholder="Enter your specilization" id="name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Skills</label>
                                        <input type="text" value={userskills} onChange={handleSkillsChange} disabled={isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-25    border border-2 
                             border-secondary  border-opacity-10"
                                            placeholder="Enter your skills" id="name" />
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