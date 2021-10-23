import { axiosClient } from "../axios/apiClient";

export function signUpUser(data){
    return axiosClient.post('users/signup/',data);
}

