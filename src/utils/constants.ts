export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const TOKEN_KEY = 'preview_token';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile'
} as const;

export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'Invalid email or password',
  NETWORK_ERROR: 'Network error occurred',
  UNAUTHORIZED: 'Please login to continue',
  FORBIDDEN: 'You do not have permission to access this resource'
} as const;