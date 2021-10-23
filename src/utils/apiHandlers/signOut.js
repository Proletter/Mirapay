// import { axiosClient } from "../apiClient";

// export function getProduct(){
//     return axiosClient.get('/product');
// }

// export function addProduct(data){
//     return axiosClient.post('/product', JSON.stringify(data));
// }

import { axiosClient } from "../axios/apiClient";

export function signInUser(data){
    return axiosClient.post('/login', JSON.stringify(data));
}

