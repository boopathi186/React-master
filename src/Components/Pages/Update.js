
import axios from "axios";
import { useState } from "react";
import { Button,  } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";


const Update= () => {
    const {id}=useParams();
    const navigate = useNavigate();
    const [info, SetInfo] = useState(
        {
            title: "", price: 0, description: "",
        }
    );
    const handlChange = (event) => {
        //    const {id,value}=event.target;
        SetInfo({
            ...info,
            [event.target.name]: event.target.value

        });
    }

    const putData = () => {
        axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, info)
            .then(response => {
                SetInfo(response.info)
                console.log(response.data);
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
        navigate('/userProfile');
    }
    return (
        <div className="text-center ">
            <div className="mb-2"><h1>Update User</h1></div>
            <form className="">
                <div className="mt-2 ">
                    <label>Title :</label>
                    <input type='text' placeholder="Enter name" name="title" onChange={handlChange} value={info.title} />
                </div>
                <div className="mt-2 ">
                    <label>Price :</label>
                    <input type='Number' placeholder="Enter price" name="price" onChange={handlChange} value={info.price} />
                </div>
                <div className="mt-2 mb-3">
                    <label>Description :</label>
                    <input type='text' placeholder="Description" name="description" onChange={handlChange} value={info.description} />
                </div>

                <Button onClick={putData} >Update</Button>
            </form>
        </div>
    );
}
export default Update;