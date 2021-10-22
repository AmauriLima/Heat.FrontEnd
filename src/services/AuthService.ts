import { api } from './utils/api';

interface IAuthResponse {
  data: {
    token: string
  }
}
class AuthService {
  async signIn(gitHubCode: string) {
    const { data } = await api.post('auth/authenticate', {
      code: gitHubCode,
    }) as IAuthResponse;

    api.defaults.headers.common.authorization = `Bearer ${data.token}`;

    return data;
  }

  async refreshToken(token: string) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const { data } = await api.get('profile/me');

    return data;
  }
}

export default new AuthService();
