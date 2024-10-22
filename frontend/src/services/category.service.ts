import { GET_CATEGORY_ALL } from "@/apis/endpoint.api";
import mainApi from "@/apis/main.api";

export const getCategories = async () => {
    const { data: response } = await mainApi.get(
        GET_CATEGORY_ALL
    );
    return response;
};