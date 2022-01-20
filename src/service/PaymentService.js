import axios from 'axios'

const ACCOUNT_DETAIL = 'http://localhost:8082/api/v1/payments/account'

class PaymentService{
    getDetail(params){
        params = 451691;
        return axios.get(ACCOUNT_DETAIL+`/${params}`)
    }

}

export default new PaymentService()