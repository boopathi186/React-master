

const Form = (props) => {
    return (
        <>

                            <div className="row row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-1 g-2 mb-4 mt-3">
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold">Name</label>
                                        <input type="text" value={props.userName} onChange={props.handleNameChange} disabled={props.isEdit} className="mt-2 py-2 text-secondary text-opacity-50  form-control
                             border border-secondary border-opacity-10"
                                            placeholder="Enter your name" id="name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Email Address</label>
                                        <input type="text" value={props.userEmail} onChange={props.handleEmailChange} disabled={props.isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2 
                                           border-secondary  border-opacity-10"
                                            placeholder="Enter your e-mail" id="name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Role</label>
                                        <input type="text" value={props.userRole} onChange={props.handleRoleChange} disabled={props.isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-50 border border-2 
                             border-secondary  border-opacity-10"
                                            placeholder="Enter your role" id="name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Age</label>
                                        <input type="text" value={props.userAge} onChange={props.handleAgeChange} disabled={props.isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2 
                             border-secondary  border-opacity-10"
                                            placeholder="Enter your age" id="name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Address</label>
                                        <input type="text" value={props.userAddress} onChange={props.handleAddressChange} disabled={props.isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2 
                               border-secondary border-opacity-10"
                                            placeholder="Enter your address" id="name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Degree</label>
                                        <input type="text" value={props.userDegree} onChange={props.handleDegreeChange} disabled={props.isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-50  border border-2  
                            border-secondary  border-opacity-10"
                                            placeholder="Enter your degree" id="name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Specilization</label>
                                        <input type="text" value={props.userSpecs} onChange={props.handleSpecsChange} disabled={props.isEdit} className="mt-2 py-2 form-control  text-secondary text-opacity-50  border border-2 
                             border-secondary  border-opacity-10"
                                            placeholder="Enter your specilization" id="name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className="fw-semibold" >Skills</label>
                                        <input type="text" value={props.userskills} onChange={props.handleSkillsChange} disabled={props.isEdit} className="mt-2 py-2 form-control text-secondary text-opacity-25    border border-2 
                             border-secondary  border-opacity-10"
                                            placeholder="Enter your skills" id="name" />
                                    </div>
                                </div>

                            </div>
                       
        </>
    );
}
export default Form;