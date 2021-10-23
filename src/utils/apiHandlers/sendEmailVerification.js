import { axiosClient } from "../axios/apiClient";

export function sendEmailVerification(data){
    return axiosClient.post('users/send-verification-email/',data);
}
