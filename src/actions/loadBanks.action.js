
import axios from 'axios'

export function loadBanks (userData) {
    return dispatch => {
        return axios.post('http://localhost:3000/api/getBanks', userData);
        // .then(
        //     (res) => { 
        //         dispatch({type: 'LOADED_BANKS', payload: res.data });
        //     },
        //     (erorr) => { 
        //         dispatch({type: 'LOADED_BANKS_ERROR', payload: erorr.response.data }) 
        //     }
        // );
    }
}