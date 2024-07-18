import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/Header";
import Toggle from "../Toggle/Toggle";
import Swal from "sweetalert2";


const Create = () => {
    const navigate = useNavigate();
    
    const [info, SetInfo] = useState(
        {
            title: "", price: "", description: "", images: ['https://pixabay.com/vectors/apparel-clothe-clothing-polo-golf-162192/'],
            categoryId: 1
        }
    );
    const handlChange = (event) => {
        const{name,value} = event.target;
        SetInfo({
            ...info,
            [name]: value,
           
        }); console.log(info);
    }

    const postData = () => {
        axios.post('https://api.escuelajs.co/api/v1/products', info)
            .then(response => {
                
                console.log(response.data);
                Swal.fire({
                    position: "center",
                    icon : "success",
                    title: "Item Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
         navigate('/userProfile');
    }
    const ret = () => {
        navigate('/userProfile');
        console.log("canceled");
    }
    
    return (
        <div>

            <div className="row m-0 p-0">
                <div className="col-xl-2 col-lg-2 p-0 m-0 vh-100 shadow d-lg-block d-none">
                    <Sidebar/>
                </div>
                <div className=" col-12 col-xl-10 col-lg-10 p-0 m-0">
                    <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header/>
                    </div>
                    <div className='d-lg-none d-block shadow'><Toggle/></div>
                    <div className=" card  mt-5 mx-5 text-center border-white shadow-sm">
                        <div className="mb-2"><h1 className="text-danger">Create User</h1></div>
                        <form className="">
                            <div className="mt-2 ">
                                <label className="w-25">Product :</label>
                                <input className="border border-white bg-light p-2 text-secondary  rounded-3 w-50" type='text' placeholder="Product" name="title" onChange={handlChange} value={info.title} />
                            </div>
                            <div className="mt-2 ">
                                <label className="w-25">Price :</label>
                                <input className="border border-white bg-light p-2 text-secondary  rounded-3 w-50" type='Number' placeholder="Price" name="price" onChange={handlChange} value={info.price} />
                            </div>
                            <div className="mt-2 mb-3">
                                <label className="w-25">Material :</label>
                                <input className="border border-white bg-light p-2 text-secondary  rounded-3  w-50" type='text' placeholder="Material" name="description" onChange={handlChange} value={info.description} />
                            </div>

                            <Button variant="primary m-2" onClick={postData} >Add Product</Button>
                            <Button variant="danger" onClick={ret} >Cancel</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Create;