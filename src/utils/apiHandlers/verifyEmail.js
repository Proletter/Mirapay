import { axiosClient } from "../axios/apiClient";

export function verifyEmail(data){
    return axiosClient.get(`users/verify-email/${data}/`);  
}
