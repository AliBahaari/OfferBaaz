import { axiosInstance } from "@/configs/axiosIntance";
import { useMutation } from "@tanstack/react-query";

const ENDPOINT_URL = "/auth/login";

export interface IUserLoginPayload {
  password: string;
  username: string;
}

export async function userLogin(payload: IUserLoginPayload) {
  return axiosInstance
    .post(ENDPOINT_URL, payload)
    .then((result) => result.data);
}

export function useUserLogin() {
  return useMutation({
    mutationKey: ["userLogin"],
    mutationFn: (payload: IUserLoginPayload) => userLogin(payload),
  });
}
