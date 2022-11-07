import axios from "axios";

export const fetchArticles = (paras) => {
    const response = axios.get(`https://baconipsum.com/api/?type=meat-and-filler&paras=${paras}`);
    return response;
}
