import { axiosClient } from "../axios/apiClient";

export function resetPasswordRequest(data){
    return axiosClient.post('users/password-reset-request/',data);
}
