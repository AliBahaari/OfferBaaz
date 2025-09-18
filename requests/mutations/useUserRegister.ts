import { axiosInstance } from "@/configs/axiosIntance";
import { useMutation } from "@tanstack/react-query";

const ENDPOINT_URL = "/user/create";

export interface IUserRegisterPayload {
  fullName: string;
  nationalCode: string;
  email: string;
  password: string;
  username: string;
}

export async function userRegister(payload: IUserRegisterPayload) {
  return axiosInstance
    .post(ENDPOINT_URL, payload)
    .then((result) => result.data);
}

export function useUserRegister() {
  return useMutation({
    mutationKey: ["userRegister"],
    mutationFn: (payload: IUserRegisterPayload) => userRegister(payload),
  });
}
