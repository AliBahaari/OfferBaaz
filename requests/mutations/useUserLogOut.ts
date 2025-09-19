import { axiosInstance } from "@/configs/axiosIntance";
import { useMutation } from "@tanstack/react-query";

const ENDPOINT_URL = "/auth/logout";

export async function userLogout() {
  return axiosInstance.post(ENDPOINT_URL).then((result) => result.data);
}

export function useUserLogout() {
  return useMutation({
    mutationKey: ["userLogout"],
    mutationFn: userLogout,
  });
}
