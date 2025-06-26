import {defineStore} from "pinia";
import apiService from "@/services/ApiService";
import {
    IFinishLoginResponse,
    ILoginPostData,
    ILoginResponse,
    IRequestOtpResponse,
    IUser,
    IVerifyOtpPostData,
} from "@/types/auth";
import {JwtService} from "@/services/JwtService";

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        user: {} as IUser,
        loginResponse: {} as ILoginResponse,
        requestOtpResponse: {} as IRequestOtpResponse,
        profileLoading: true,
        blockedTime: 0,
        id: NaN as number,
    }),
    actions: {
        login(params: ILoginPostData) {
            return new Promise((resolve, reject) => {
                apiService
                    .post<ILoginPostData, ILoginResponse>("/auth/login/", {
                        login: params.login,
                        password: params.password,
                    })
                    .then((res) => {
                        console.log(res?.data)
                        JwtService.saveId(res?.data?.data?.user?.user_id);
                        JwtService.saveToken(res?.data?.data?.id_token);
                        JwtService.saveRefreshToken(res?.data?.data?.refresh_token);
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        verifyOtp(otp: string) {
            return new Promise((resolve, reject) => {
                apiService
                    .post<IVerifyOtpPostData>("auth/LoginConfirm/", {
                        phone: this.loginResponse.phone_number,
                        code: otp,
                        type_: "backoffice_login_sms_verification",
                        session: this.loginResponse?.session,
                    })
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        finishLogin(tokens: IFinishLoginResponse) {
            JwtService.saveToken(tokens.access);
            JwtService.saveRefreshToken(tokens.refresh);
        },
        fetchUserData() {
            const id = JwtService.getId();
            apiService.setHeader();
            this.profileLoading = true;
            return new Promise((resolve, reject) => {
                apiService
                    .get<IUser>(`/auth/profile`)
                    .then((res) => {
                        this.user = res.data;
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    })
                    .finally(() => {
                        setTimeout(() => {
                            this.profileLoading = false;
                        }, 500);
                    });
            });
        },
        logout() {
            JwtService.destroyAccess();
            JwtService.destroyRefresh();
            apiService.setHeader();
            this.user = {} as IUser;
        },
    },
});
