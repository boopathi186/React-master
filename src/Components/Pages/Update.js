
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/Header";
import Toggle from "../Toggle/Toggle";
import Swal from "sweetalert2";
import { getproducts, updateProduct } from "./ApiCall";
const Update = () => {
    const { id } = useParams();
    const [info, SetInfo] = useState(
        {
            Title: "", Price: 0, Description: "",
        }
    );

    const handlChange = (event) => {
        //    const {id,value}=event.target;
        SetInfo({
            ...info,
            [event.target.name]: event.target.value

        });
    }
    useEffect(() => {
        getproducts(id)
            .then(response => {
                SetInfo({
                    title: response.data.title,
                    price: response.data.price,
                    description: response.data.description
                });
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);
    // update
    const putData = () => {
        updateProduct(id, info)
            .then(response => {
                SetInfo(response.info)
                console.log(response.data);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
        window.history.back();
    }
    const ret = () => {
        window.history.back();
        Swal.fire({
            toast: true,
            position: "top-end",icon: "info",
            title: "canceled",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
    }
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
                    <div className='d-lg-none d-block shadow'><Toggle /></div>
                    <div className="h-75 d-flex align-items-center justify-content-center">
                        <div className="w-50">
                            <div className=" card  mt-5 mx-5 text-center border-light shadow-sm ">
                                <div className="text-center ">
                                    <div className="mb-2 mt-4"><h3 className="text-secondary mb-5">Update Product</h3></div>
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
                                  <div className="mt-3"> <Button variant="primary m-2" onClick={putData}>Update</Button>
                                    <Button variant="danger m-2" onClick={ret}>cancel</Button></div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Update;