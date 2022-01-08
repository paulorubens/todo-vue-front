import Api from '../helpers/Api';

export default {
  async getTasks() {
    try {
      const response = await Api().get('/tasks');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
  async createTask(task) {
    try {
      const response = await Api().post('/tasks', task);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
  async updateTask(task) {
    try {
      const response = await Api().patch(`/tasks/${task.id}`, task);
      return response;
    } catch (error) {
      return console.log(error);
    }
  },
  async deleteTask(id) {
    try {
      const response = await Api().delete(`/tasks/${id}`);
      return response;
    } catch (error) {
      return console.log(error);
    }
  },
};
