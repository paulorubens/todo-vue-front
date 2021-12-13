import axios from 'axios';

export default () => axios.create({
  baseURL: 'http://172.18.0.3:3000/api' //process.env.BASE_URL
  // headers: [{'Access-Control-Allow-Origin': true}],
  // mode: 'cors'
});
