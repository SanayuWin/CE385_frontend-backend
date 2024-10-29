import { GET_CATEGORY_ALL, CREATE_CATEGORY } from "@/apis/endpoint.api";
import mainApi from "@/apis/main.api";
import { PayLoadCreateCategory } from "@/types/requests/request.category";
import { CategoryResponse } from "@/types/response/response.category";

export const getCategories = async () => {
    const { data: response } = await mainApi.get(
        GET_CATEGORY_ALL
    );
    return response;
};

export const postCategory = async (data: PayLoadCreateCategory) => {
    const { data: response } = await mainApi.post<CategoryResponse>(
        CREATE_CATEGORY,
        data
    );
    return response;
}