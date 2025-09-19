import { axiosInstance } from "@/configs/axiosIntance";
import { useQuery } from "@tanstack/react-query";

const ENDPOINT_URL = "/auth/profile";

interface AuthProfile {
  id: string;
  fullName: string;
  nationalCode: string;
  email: string;
  username: string;
  createdAt: string;
  savedProducts: [];
}

export async function authProfile(): Promise<AuthProfile> {
  return axiosInstance
    .get<AuthProfile>(ENDPOINT_URL)
    .then((result) => result.data);
}

export function useAuthProfile() {
  return useQuery({
    queryKey: ["authProfile"],
    queryFn: authProfile,
  });
}
