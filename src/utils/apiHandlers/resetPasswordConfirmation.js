import { axiosClient } from "../axios/apiClient";

export function resetPassword(data){
    return axiosClient.post(`users/reset-password-confirm/`, data);
}
