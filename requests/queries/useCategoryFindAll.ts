import { axiosInstance } from "@/configs/axiosIntance";
import { useQuery } from "@tanstack/react-query";

const ENDPOINT_URL = "/category/findAll";

interface CategoryFindAllResponse {
  name: string;
  subcategories: string[];
  id: string;
  createdAt: string;
}

export async function categoryFindAll(): Promise<CategoryFindAllResponse[]> {
  return axiosInstance
    .get<CategoryFindAllResponse[]>(ENDPOINT_URL)
    .then((result) => result.data);
}

export function useCategoryFindAll() {
  return useQuery({
    queryKey: ["categoryFindAll"],
    queryFn: categoryFindAll,
  });
}
