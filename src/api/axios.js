import axios  from 'axios'
const BASE_URL = 'http://localhost:5555'
export  default axios.create({
    baseURL: BASE_URL,
})






export  const axiosPrivet =axios.create({
    baseURL:BASE_URL,
    headers:{
        'Content-Type':'application/json',
    },
    withCredentials:true,
    }
)
