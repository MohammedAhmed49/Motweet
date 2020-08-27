import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://motweet-19f67.firebaseio.com/'
});

export default instance;
