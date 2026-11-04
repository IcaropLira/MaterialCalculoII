import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// VITE_BASE: use "/MaterialCalculoII/" se for publicar em github.io/<repo>/ (veja README).
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
});
