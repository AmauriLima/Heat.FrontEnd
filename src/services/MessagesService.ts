import { api } from './utils/api';

class MessageService {
  async listThreeLastMessages() {
    const { data } = await api.get('message/last3');
    return data;
  }
}

export default new MessageService();
