import axios from 'axios';

const apiexterna2 = axios.create({   
    baseURL: 'https://api.imgur.com/3/',  
})

export default apiexterna2; 
