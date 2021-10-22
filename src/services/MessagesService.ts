import { api } from './utils/api';

class MessageService {
  async listThreeLastMessages() {
    const { data } = await api.get('/message/last3');
    return data;
  }

  async sendMessage(message: string) {
    if (!message.trim()) {
      return;
    }
    await api.post('/message', { message });
  }
}

export default new MessageService();
