import axios from 'axios';
const URL= process.env.VUE_APP_PROJECT_URL

export default {

    post(url, conversionDTO) {
        return axios({
            method: 'post',
            url: `${URL}/${url}`,
            data: conversionDTO,
        })
    },
    get(url) {
        return axios({
            method: 'get',
            url: `${URL}/${url}`,
        })
    }
}