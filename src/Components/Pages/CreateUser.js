import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/Header";
import Toggle from "../Toggle/Toggle";
import Swal from "sweetalert2";
import '../Css/Createstyle.css';
import { createProducts } from "./ApiCall";

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
              createProducts(info)
            .then(response=> {
               console.log(response.data);   
               Swal.fire({
                    position: "center",
                    icon : "success",
                    title: "Product Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch((error)=> {
                console.error("There was an error!", error);
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error creating the product',
                    icon: 'error',
                    confirmButtonText: 'OK'
                  });
            });
         navigate('/dashboard/userProfile');
    }
    const ret = () => {
        navigate('/dashboard/userProfile');
        Swal.fire({
            position: "top-end",
            icon: "info",
            title: "canceled",
            showConfirmButton: false,
            timer: 1500
          });
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
                        <div className="mb-2"><h3 className="text-secondary mt-4">Create Product</h3></div>
                        <form className="">
                            <div className="mt-2 ">  
                            {['title', 'price', 'description'].map((field) => (
                                        <form key={field} className="">
                                            <div className="mt-2 ">
                                                <label className="w-25 py-3  text-secondary ">{field.toUpperCase()}</label>
                                                <input className="border border-white  p-2 rounded-3 mb-2 w-50" type='text'
                                                    name={field}
                                                    value={info[field] || ''}
                                                    onChange={handlChange}
                                                    placeholder={`Enter your ${field.toLowerCase()}`} />
                                            </div>
                                        </form>
                                    ))}
                            

                            <Button variant="primary m-2" onClick={postData} >Create Product</Button>
                            <Button variant="danger" onClick={ret} >Cancel</Button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Create;