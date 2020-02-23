import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://the-counter-project.firebaseio.com/'
});

export default instance;