import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    // Custom plugin to resolve figma:asset imports
    {
      name: 'resolve-figma-assets',
      resolveId(id) {
        if (id.startsWith('figma:asset/')) {
          const assetPath = id.replace('figma:asset/', '');
          return path.resolve(__dirname, './src/assets', assetPath);
        }
        return null;
      },
    },
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
