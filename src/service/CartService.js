import axios from 'axios'

const SONG_API_BASE_URL = 'http://localhost:8080/cart/'

class CartService{
    addToCart(id){
        return axios.post(SONG_API_BASE_URL+'add/?id='+id);
    }

    getDetail(){
        return axios.get(SONG_API_BASE_URL+'detail');
    }
}

export default new CartService()