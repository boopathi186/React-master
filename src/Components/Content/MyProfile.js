import { useState } from 'react';
import Profile from '../Assets/profilepic.png';
import Exit from '../Buttons/CancelButton';
import EditButton from '../Buttons/EditButton';
import Save from '../Buttons/SaveButton';
import '../Css/Contentstyle.css';
import Header from '../Header/Header';

const MyProfile = () => {
    const [userName, setName] = useState('');
    const [userEmail, setEmail] = useState('');
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    return (
        <div className='m-0 p-0'>
             <div className="col-12 p-0 m-0">
             <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
           {/* props */}
            <Header userName={userName} userEmail={userEmail} />
            </div>
            </div>
            <div className="innercontent row d-flex flex-row p-0 m-0 mt-4 mb-3 bg-white border border-light border-opacity-25 rounded-3 mx-3 ">



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
                                <EditButton />
                            </div>
                        </div>
                        <div className="row row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-1 g-2 mb-4 mt-3">
                            <div className="col">
                                <div>
                                    <label className="fw-semibold">Name</label>
                                    <input type="text" required value={userName} onChange={handleNameChange} disabled className="mt-2 py-2 text-secondary text-opacity-50  form-control
                             border border-secondary border-opacity-10"
                                        placeholder="Enter your name" id="name" />
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <label className="fw-semibold" >Email Address</label>
                                    <input type="text" required value={userEmail} onChange={handleEmailChange} disabled className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2 
                             border-secondary  border-opacity-10"
                                        placeholder="Enter your e-mail" id="name" />
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <label className="fw-semibold" >Role</label>
                                    <input type="text" disabled className="mt-2 py-2 form-control text-secondary text-opacity-50 border border-2 
                             border-secondary  border-opacity-10"
                                        placeholder="Enter your role" id="name" />
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <label className="fw-semibold" >Age</label>
                                    <input type="text" disabled className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2 
                             border-secondary  border-opacity-10"
                                        placeholder="Enter your age" id="name" />
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <label className="fw-semibold" >Address</label>
                                    <input type="text" disabled className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2 
                               border-secondary border-opacity-10"
                                        placeholder="Enter your address" id="name" />
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <label className="fw-semibold" >Degree</label>
                                    <input type="text" disabled className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2  
                            border-secondary  border-opacity-10"
                                        placeholder="Enter your degree" id="name" />
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <label className="fw-semibold" >Specilization</label>
                                    <input type="text" disabled className="mt-2 py-2 form-control  text-secondary text-opacity-50  border border-2 
                             border-secondary  border-opacity-10"
                                        placeholder="Enter your specilization" id="name" />
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <label className="fw-semibold" >Skills</label>
                                    <input type="text" disabled className="mt-2 py-2 form-control text-secondary text-opacity-25    border border-2 
                             border-secondary  border-opacity-10"
                                        placeholder="Enter your skills" id="name" />
                                </div>
                            </div>

                        </div>
                    </form>
                    <div className='text-md-end text-center ' >
                        <Save id="save" /> <Exit id="exit"  />

                    </div>

                </div>
            </div>
        </div>

    );
}
export default MyProfile;