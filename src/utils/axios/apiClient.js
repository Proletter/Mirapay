import axios from 'axios';


const baseUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8000' : 'https://api.mirapayments.com'


if(process.env.NODE_ENV === 'production'){
  console.log = function() {}
}

console.log("BaseUrl",baseUrl)
console.log("env", process.env.NODE_ENV)

const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
},
console.log('url', baseUrl)

);

axiosClient.interceptors.response.use(
    function (response) {
      return response;
    }, 
    function (error) {
      // return error.response
      let res = error.response;
      // redirect rules for all 401 responses to another page
      if (res.status >= 401 || res.status < 500) {
        return res
      }
      // return error
      return Promise.reject(error)
    }
  );




export{
  axiosClient
} 