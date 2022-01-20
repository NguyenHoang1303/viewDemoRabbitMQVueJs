import axios from 'axios'

const ORDER_CREATE = 'http://localhost:8080/api/v1/order/create'

class OrderService{

    create(form){
        form.device_token = localStorage.getItem("device_token");
        return axios.post(ORDER_CREATE,form);
    }

    getAll(params){
        return axios.get('http://localhost:8080/api/v1/order', {
            params:params
        });
    }

}

export default new OrderService()