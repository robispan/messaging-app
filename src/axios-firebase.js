import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://messaging-app-a041c.firebaseio.com/'
});

export default instance;