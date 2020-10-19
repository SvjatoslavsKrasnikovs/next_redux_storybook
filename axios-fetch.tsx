import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ssddemo-4d841.firebaseio.com/'
});

export default instance;