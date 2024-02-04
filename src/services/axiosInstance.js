import axios from 'axios';

const key = process.env.API_KEY
const URL='https://www.alphavantage.co/query?'

const instance = axios.create({
    baseURL: URL,
    params: {
        apikey: key,
    },
});

export default instance;
