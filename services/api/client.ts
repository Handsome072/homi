/**
 * Client API générique pour les appels réseau
 * Prêt pour être connecté à un backend REST ou GraphQL
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

interface RequestConfig extends RequestInit {
  params?: Record<string, string>;
}

interface ApiError extends Error {
  status: number;
  data?: unknown;
}

/**
 * Client HTTP générique
 * @param endpoint - L'endpoint à appeler (relatif à API_BASE_URL)
 * @param config - Configuration de la requête
 * @returns Les données typées de la réponse
 */
export async function apiClient<T>(
  endpoint: string,
  config: RequestConfig = {}
): Promise<T> {
  const { params, ...init } = config;

  // Construction de l'URL avec les paramètres de requête
  const url = API_BASE_URL
    ? new URL(endpoint, API_BASE_URL)
    : new URL(endpoint, window.location.origin);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  const response = await fetch(url.toString(), {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init.headers,
    },
  });

  if (!response.ok) {
    const error = new Error(`API Error: ${response.status}`) as ApiError;
    error.status = response.status;
    try {
      error.data = await response.json();
    } catch {
      // Pas de body JSON
    }
    throw error;
  }

  // Retourne un objet vide si pas de contenu
  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}

/**
 * Helpers pour les méthodes HTTP courantes
 */
export const api = {
  get: <T>(endpoint: string, params?: Record<string, string>) =>
    apiClient<T>(endpoint, { method: 'GET', params }),

  post: <T>(endpoint: string, data?: unknown) =>
    apiClient<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    }),

  put: <T>(endpoint: string, data?: unknown) =>
    apiClient<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    }),

  patch: <T>(endpoint: string, data?: unknown) =>
    apiClient<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    }),

  delete: <T>(endpoint: string) =>
    apiClient<T>(endpoint, { method: 'DELETE' }),
};

