import api from './api.config';

interface UpdateProfileData {
  fullName?: string;
  email?: string;
  password?: string;
  currentPassword?: string;
}

const UserService = {
  async getProfile() {
    return await api.get('/users/profile');
  },

  async updateProfile(data: UpdateProfileData) {
    return await api.put('/users/profile', data);
  },

  async changePassword(data: { currentPassword: string; newPassword: string }) {
    return await api.put('/users/change-password', data);
  },

  async deleteAccount() {
    return await api.delete('/users/account');
  }
};

export default UserService;