import axios from "axios";

export const API_URL="https://api.vidieats.com/en/";

const authServicePaths={
    login:"superAdmin/login/",
}
export type UserLoginRequest = {
    email: string,
    password:string
}

export type User={
    first_name?:string,
    last_name?:string,
    adminId?:string
}

export const AuthServices = {
    login:async(data:UserLoginRequest):Promise<User>=>{
        return await axios.post<any,any>(API_URL+authServicePaths.login,data).then(res=>res.data.user);
    },
}