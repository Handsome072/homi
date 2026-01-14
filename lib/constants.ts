/**
 * Routes où le Header principal ne doit pas apparaître
 */
export const HIDDEN_HEADER_PATHS = [
  '/property/',
  '/experience/',
  '/service/',
  '/booking',
  '/search',
  '/client-space',
  '/messages',
  '/privacy',
  '/terms',
  '/how-it-works',
  '/company-info',
  '/host-onboarding',
] as const;

/**
 * Routes de l'application
 */
export const ROUTES = {
  HOME: '/',
  EXPERIENCES: '/experiences',
  SERVICES: '/services',
  PROPERTY: (id: string) => `/property/${id}`,
  EXPERIENCE: (id: string) => `/experience/${id}`,
  SERVICE: (id: string) => `/service/${id}`,
  BOOKING: '/booking',
  SEARCH: '/search',
  MESSAGES: '/messages',
  CLIENT_SPACE: '/client-space',
  CLIENT_SPACE_RESERVATIONS: '/client-space/reservations',
  CLIENT_SPACE_SECURITY: '/client-space/security',
  CLIENT_SPACE_PROFILE: '/client-space/profile',
  CLIENT_SPACE_NOTIFICATIONS: '/client-space/notifications',
  CLIENT_SPACE_PAYMENTS: '/client-space/payments',
  CLIENT_SPACE_LANGUAGES: '/client-space/languages',
  HOST_ONBOARDING: '/host-onboarding',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  HOW_IT_WORKS: '/how-it-works',
  COMPANY_INFO: '/company-info',
} as const;

/**
 * Types de pages pour la navigation
 */
export type PageType = 'logements' | 'experiences' | 'services';

