import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com/';

type Options = {
    params: {
    client_id: string;
    query: string;
    page: number;
    per_page: number;
    orientation: string;
};
};

export async function fetchImages<T>(searchValue: string, page: number): Promise<T>{
    const axiosOptions: Options = {
        params: {
            client_id: 'Z02RgsWxp9wYhbzY10H-LRHgjPYDmIvriueEpETzziw',
            query: searchValue,
            page: page,
            per_page: 12,
            orientation: 'landscape',
        }
    }
        const response: T = await axios.get('search/photos', axiosOptions);
        return response;

}