import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactiver les optimisations d'image pour garantir UI identique
  images: {
    unoptimized: true,
    // Permettre les images externes (Unsplash, etc.)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Configuration Turbopack
  turbopack: {
    root: __dirname,
    resolveAlias: {
      // Alias pour résoudre les imports figma:asset
      'figma:asset': resolve(__dirname, './src/assets'),
    },
  },

  // Configuration Webpack (fallback si Turbopack non utilisé)
  webpack: (config) => {
    // Résolution des imports figma:asset/
    config.resolve.alias = {
      ...config.resolve.alias,
      'figma:asset': resolve(__dirname, './src/assets'),
    };
    return config;
  },

  // Redirections pour compatibilité avec les anciennes URLs
  async redirects() {
    return [];
  },

  // Headers pour le cache et la sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

