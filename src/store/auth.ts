import {defineStore} from "pinia";
import apiService from "@/services/ApiService";
import {
    IFinishLoginResponse,
    ILoginPostData,
    ILoginResponse,
    IRequestOtpResponse,
    IRgisterationPostData,
    IUser,
    IVerifyOtpPostData
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
        register(params: IRgisterationPostData) {
            return new Promise((resolve, reject) => {
                const requestBody: any = {
                    email: params.email,
                    login: params.login,
                    first_name: params.first_name,
                    last_name: params.last_name,
                    password: params.password,
                    promocode: params.promocode,
                    confirm_password: params.confirm_password,
                };

                // Agar jshshir bo‘lsa, qo‘shiladi
                if (params.jshshir) {
                    requestBody.jshshir = params.jshshir;
                }
                if (params.jshshir) {
                    requestBody.seriya_number = params.seriya_number;
                }
                apiService
                    .post<IRgisterationPostData, ILoginResponse>(`/auth/register/?invite=${params.invite}`, requestBody)
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
        verifyOtp(otp: { email: string, code: string }) {
            return new Promise((resolve, reject) => {
                apiService
                    .post<IVerifyOtpPostData>("/auth/verify/email/", {
                        email: otp.email,
                        code: otp.code
                    })
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });

        },
        getOtpCode(email: sring) {
            return new Promise((resolve, reject) => {
                apiService
                    .post<any>("/auth/send/email/", {
                        email: email,
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
