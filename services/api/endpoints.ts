/**
 * Définition centralisée des endpoints API
 * À compléter quand le backend sera disponible
 */

export const ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REGISTER: '/api/auth/register',
    ME: '/api/auth/me',
  },

  // Properties (Logements)
  PROPERTIES: {
    LIST: '/api/properties',
    DETAIL: (id: string) => `/api/properties/${id}`,
    SEARCH: '/api/properties/search',
    POPULAR: '/api/properties/popular',
  },

  // Experiences
  EXPERIENCES: {
    LIST: '/api/experiences',
    DETAIL: (id: string) => `/api/experiences/${id}`,
    SEARCH: '/api/experiences/search',
  },

  // Services
  SERVICES: {
    LIST: '/api/services',
    DETAIL: (id: string) => `/api/services/${id}`,
    CATEGORIES: '/api/services/categories',
  },

  // Bookings (Réservations)
  BOOKINGS: {
    LIST: '/api/bookings',
    DETAIL: (id: string) => `/api/bookings/${id}`,
    CREATE: '/api/bookings',
    CANCEL: (id: string) => `/api/bookings/${id}/cancel`,
  },

  // Messages
  MESSAGES: {
    CONVERSATIONS: '/api/messages/conversations',
    CONVERSATION: (id: string) => `/api/messages/conversations/${id}`,
    SEND: '/api/messages/send',
  },

  // User
  USER: {
    PROFILE: '/api/user/profile',
    UPDATE_PROFILE: '/api/user/profile',
    NOTIFICATIONS: '/api/user/notifications',
    PAYMENTS: '/api/user/payments',
  },
} as const;

