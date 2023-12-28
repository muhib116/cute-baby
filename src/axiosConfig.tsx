import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.API_URL,
    timeout: 10000, // Set a timeout if needed
    headers: {
        'Content-Type': 'application/json',
        // You can add other common headers here
    },
})
console.log(instance)
export default instance