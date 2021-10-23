import { axiosClient } from "../axios/apiClient";

export function validatePasswordResetToken(data){
    return axiosClient.post(`/users/reset-password-validate-token/`, data);
}
