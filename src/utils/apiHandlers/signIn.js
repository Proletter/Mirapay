import { axiosClient } from "../axios/apiClient";

export function signInUser(data){
    console.log(data)
    return axiosClient.post('users/login/',data);
}

