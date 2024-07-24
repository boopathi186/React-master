import axiosInstance from '../Pages/AxiosConfig';
export const createProducts = (info) => {
    return axiosInstance.post('/products',info);
};
export const getproducts = (Id) => {
    return axiosInstance.get(`/products/${Id?Id:""}`);
};
// export const getUpdateproducts = (Id) => {
//     return axiosInstance.get(`/products/${Id?id:""}`);
// };
export const updateProduct = (Id, info) => {
    return axiosInstance.put(`/products/${Id}`,info);
};
export const deleteProducts = (Id) => {
    return axiosInstance.delete(`/products/${Id}`);
};