import axios from 'axios'

const SONG_API_BASE_URL = 'http://localhost:8080/api/v1/products'

class ProductService{
    getAll(params){
        return axios.get(SONG_API_BASE_URL, {
            params: params,
        });
    }

}

export default new ProductService()