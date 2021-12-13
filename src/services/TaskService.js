import Api from './Api';

export default {
  async getTasks() {
    try {
      const response = await Api().get('/tasks');
      return response.data;
  } catch (error) {
      console.log('erro');
      return console.log(error);
    }
  },
};