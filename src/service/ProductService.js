import axios from 'axios'

const GET_ALL = 'http://localhost:8082/api/v1/products'

class ProductService{
    getAll(params){
        return axios.get(GET_ALL, {
            params: params,
        });
    }

}

export default new ProductService()