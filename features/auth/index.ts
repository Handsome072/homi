// Re-export from the main AuthContext to ensure single source of truth
export { AuthProvider, useAuth } from '@/src/app/context/AuthContext';

// Re-export User type (need to define it here since src/app/context doesn't export it)
export type User = {
  name: string;
  email: string;
  avatar?: string;
};

