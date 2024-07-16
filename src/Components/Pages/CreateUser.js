import axios from "axios";
import { useState } from "react";
import { Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Create = () => {
    const navigate = useNavigate();
    const [info, SetInfo] = useState(
        {
            title: "", price: "", description: "", images: ['https://pixabay.com/vectors/apparel-clothe-clothing-polo-golf-162192/'],
            categoryId: 1
        }
    );
    const handlChange = (event) => {
        //    const {id,value}=event.target;
        SetInfo({
            ...info,
            [event.target.name]: event.target.value

        });
    }

    const postData = () => {
        axios.post('https://api.escuelajs.co/api/v1/products', {
            title: info.title,
            price: (info.price),
            description: info.description,
            images: info.images,
            categoryId: 1
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
        navigate('/userProfile');
    }
    return (
        <div className="text-center ">
            <div className="mb-2"><h1>Create User</h1></div>
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

                <Button onClick={postData} >Add Product</Button>
            </form>
        </div>
    );
}
export default Create;