
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/Header";
import Toggle from "../Toggle/Toggle";
import Swal from "sweetalert2";


const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [info, SetInfo] = useState(
        {
            title: "", price: 0, description: "",
        }
    );
    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
          .then(response => {
            SetInfo(  {
                title: response.data.title, price: response.data.price, description: response.data.description
            });           
          })
          .catch(error => {
            console.log(error);
          });
      }, [id]);
    const handlChange = (event) => {
        //    const {id,value}=event.target;
        SetInfo({
            ...info,
            [event.target.name]: event.target.value

        });
    }
    // update
    const putData = () => {
        axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, info)
            .then(response => {
                SetInfo(response.info.title)
                console.log(response.data);
              Swal.fire({
                    position: "center",
                    icon : "success",
                    title: "Item Updated Successfully",
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
                    <Sidebar />
                </div>
                <div className=" col-12 col-xl-10 col-lg-10 p-0 m-0">
                    <div className="row border-bottom border-secondary border-opacity-25 text-end p-0 m-0 d-lg-block d-none">
                        <Header />
                    </div>
                    <div className='d-lg-none d-block shadow'><Toggle/></div>
                    <div className=" card  mt-5 mx-5 text-center border-white shadow-sm">
                        <div className="text-center ">
                            <div className="mb-2"><h3 className="text-danger mb-3">Update Product</h3></div>
                            <form className="">
                                <div className="mt-2 ">
                                    <label className="w-25">Product :</label>
                                    <input className="border border-white bg-light p-2 rounded-3 text-secondary  w-50" type='text'
                                     placeholder="Product" name="title" onChange={handlChange} value={info.title} />
                                </div>
                                <div className="mt-2 ">
                                    <label className="w-25">Price :</label>
                                    <input className="border border-white bg-light p-2 rounded-3 text-secondary   w-50" type='Number' 
                                    placeholder="Price" name="price" onChange={handlChange} value={info.price} />
                                </div>
                                <div className="mt-2 mb-3">
                                    <label className="w-25">Material :</label>
                                    <input className="border border-white bg-light p-2 rounded-3 text-secondary  w-50" type='text' 
                                    placeholder="Material" name="description" onChange={handlChange} value={info.description} />
                                </div>

                                <Button variant="primary m-2"  onClick={putData}>Update</Button>
                                <Button variant="danger" onClick={ret}>cancel</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Update;